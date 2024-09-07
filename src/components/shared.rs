use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct Props {
    pub children: Html,
}

#[function_component]
pub fn Title(props: &Props) -> Html {
    html! {
        <div class={classes!(String::from("text-center uppercase text-8xl font-medium"))}>
            { props.children.clone() }
        </div>
    }
}

#[function_component]
pub fn Description(props: &Props) -> Html {
    html! {
        <div class={classes!(String::from("flex flex-col items-center "))}>
            { props.children.clone() }
        </div>
    }
}
