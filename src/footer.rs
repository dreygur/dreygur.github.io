use chrono::Datelike;
use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[function_component]
pub fn Footer() -> Html {
    let current_date = chrono::Utc::now();
    html! {
        <div class={classes!(String::from("flex justify-between items-center"))}>
            <div class={classes!(String::from("text-primary"))}>
                {"© "}{current_date.year()}{" All rights reserved."}
            </div>
            <ul class={classes!(String::from("flex gap-4 items-center"))}>
                <li class={classes!(String::from("cursor-pointer"))}>
                    <Icon icon_id={IconId::BootstrapGithub} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
                </li>
                <li class={classes!(String::from("cursor-pointer"))}>
                    <Icon icon_id={IconId::BootstrapTwitter} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
                </li>
                <li class={classes!(String::from("cursor-pointer"))}>
                    <Icon icon_id={IconId::BootstrapLinkedin} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
                </li>
            </ul>
        </div>
    }
}
