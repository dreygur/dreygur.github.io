use crate::body::Body;
use crate::components::shared::Title;
use yew::prelude::*;

#[function_component]
pub fn NotFound() -> Html {
    html! {
        <Body>
            <Title>
                {"Page not found!"}
            </Title>
        </Body>
    }
}
