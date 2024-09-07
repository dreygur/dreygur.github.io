use crate::body::Body;
use crate::components::shared::{Description, Title};
use yew::prelude::*;

#[function_component]
pub fn Contacts() -> Html {
    html! {
        <Body>
            <Title>
                {"Contacts"}
            </Title>
            <Description>
                {"Simple Text"}
            </Description>
        </Body>
    }
}
