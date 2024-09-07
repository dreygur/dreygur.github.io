use crate::body::Body;
use crate::components::shared::{Description, Title};
use yew::prelude::*;

#[function_component]
pub fn Home() -> Html {
    html! {
        <Body>
            <Title>
                {"Rakibul Yeasin"}
            </Title>
            <Description>
                <p class={classes!(String::from("text-center w-[50%]"))}>
                    {"Coding since it's cool and robots since they're cooler. Blending the two to make life a little easier! Experienced in Go, Python, Rust, JS & TS with a puppet show of puppeteer, selenium and Scrapy. Automated Discord(discord bots), Telegram, Twitter, Binance, Youtube, Google Sheets. Missed anything?"}
                </p>
                <p>
                    {"You name it for me to try!"}
                </p>
            </Description>
        </Body>
    }
}
