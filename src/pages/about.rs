use crate::body::Body;
use crate::components::shared::{Description, Title};
use yew::prelude::*;

#[function_component]
pub fn About() -> Html {
    html! {
        <Body>
            <Title>
                {"About Me"}
            </Title>
            <Description>
                {"Simple Text"}
            </Description>
        </Body>
    }
}
