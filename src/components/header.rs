use crate::router::Route;
use yew::prelude::*;
use yew_icons::{Icon, IconId};
use yew_router::prelude::*;

#[function_component]
pub fn Header() -> Html {
    let navigator = use_navigator().unwrap();

    let navigator_home = navigator.clone();
    let onclick_home = Callback::from(move |_| navigator_home.push(&Route::Home));

    let navigator_contacts = navigator.clone();
    let onclick_contacts = Callback::from(move |_| navigator_contacts.push(&Route::Contacts));

    let onclick_about = Callback::from(move |_| navigator.push(&Route::About));

    html! {
        <div class={classes!(String::from("flex justify-between md:items-center "))}>
            <div onclick={onclick_home} class={classes!(String::from("text-primary cursor-pointer"))}>
                {"Rakib"}
            </div>
            <ul class={classes!(String::from("flex flex-col md:flex-row min-h-12 w-full md:w-auto bg-dark md:bg-text p-4 items-center gap-12"))}>
                <li onclick={onclick_about} class={classes!(String::from("hover:underline underline-offset-8 cursor-pointer"))}>{"About Me"}</li>
                <li class={classes!(String::from("hover:underline underline-offset-8 cursor-pointer"))}>{"Projects"}</li>
                <li class={classes!(String::from("hover:underline underline-offset-8 cursor-pointer"))}>{"Resume"}</li>
                <li onclick={onclick_contacts} class={classes!(String::from("border border-dark py-2 px-8 cursor-pointer hover:text-text hover:bg-dark"))}>{"Contacts"}</li>
            </ul>
            <div class="md:hidden">
                <Icon icon_id={IconId::LucideMenu} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
            </div>
        </div>
    }
}
