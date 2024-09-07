// use chrono::Datelike;
use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[function_component]
pub fn Footer() -> Html {
    // let current_date = chrono::Utc::now();
    html! {
        <div class={classes!(String::from("flex justify-end items-center"))}>
            // <div class={classes!(String::from("text-primary"))}>
            //     {"© "}{current_date.year()}{" All rights reserved."}
            // </div>
            <ul class={classes!(String::from("flex gap-4 items-center"))}>
                <li class={classes!(String::from("cursor-pointer"))}>
                    <a href={String::from("https://github.com/dreygur")} target={String::from("_blank")}>
                        <Icon icon_id={IconId::BootstrapGithub} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
                    </a>
                </li>
                <li class={classes!(String::from("cursor-pointer"))}>
                    <a href={String::from("https://x.com/drreygur")} target={String::from("_blank")}>
                        <Icon  icon_id={IconId::BootstrapTwitter} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
                    </a>
                </li>
                <li class={classes!(String::from("cursor-pointer"))}>
                    <a href={String::from("https://www.linkedin.com/in/dreygur/")} target={String::from("_blank")}>
                        <Icon icon_id={IconId::BootstrapLinkedin} width={"1rem".to_owned()} height={"1rem".to_owned()}/>
                    </a>
                </li>
            </ul>
        </div>
    }
}
