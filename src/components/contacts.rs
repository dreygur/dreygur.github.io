use yew::prelude::*;

#[function_component]
pub fn Contacts() -> Html {
    html! {
        <div class={classes!(String::from("flex justify-end items-center"))}>
            // <div class={classes!(String::from("text-primary"))}>
            //     {"Rakib"}
            // </div>
            <ul class={classes!(String::from("flex gap-12 items-center"))}>
                <li class={classes!(String::from("hover:underline underline-offset-8 cursor-pointer"))}>{"About Me"}</li>
                <li class={classes!(String::from("hover:underline underline-offset-8 cursor-pointer"))}>{"Projects"}</li>
                <li class={classes!(String::from("hover:underline underline-offset-8 cursor-pointer"))}>{"Resume"}</li>
                <li class={classes!(String::from("border border-dark py-2 px-8 cursor-pointer hover:text-text hover:bg-dark"))}>{"Contacts"}</li>
            </ul>
        </div>
    }
}
