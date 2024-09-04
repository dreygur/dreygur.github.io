use yew::prelude::*;

#[function_component]
pub fn Body() -> Html {
    html! {
        <div>
            <div class={classes!(String::from("text-primary text-center"))}>
                {"This is gonna be the body!"}
            </div>
        </div>
    }
}
