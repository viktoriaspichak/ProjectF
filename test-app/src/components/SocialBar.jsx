import React from 'react';
import { IconButton, ButtonToolbar } from 'rsuite';
import Github from '@rsuite/icons/legacy/Github'
import  FacebookIcon  from '@rsuite/icons/legacy/Facebook';
import  TelegramIcon  from '@rsuite/icons/legacy/Telegram';
import  YouTubeIcon  from '@rsuite/icons/legacy/Youtube';
import TwitterIcon from '@rsuite/icons/legacy/Twitter';
import LinkedinIcon from '@rsuite/icons/legacy/Linkedin';
import './social_bar.css';
import 'rsuite/dist/rsuite.min.css';

const SocialBar =() => {
    return(
        <div style={{ display: 'flex', justifyContent: 'center',maxWidth:"100%",marginRight:"37px"}}>
        <div className="center-content">
            <p className = "top">Не забудь подписаться на наши соц. сети и следить за новостями!</p>
            <div>
                <ButtonToolbar>
                    <IconButton icon={<Github />}  href="https://github.com/" appearance="primary"  circle />
                    <IconButton icon={<FacebookIcon />} href="https://www.facebook.com/?locale=uk_UA" appearance="primary"   circle />
                    <IconButton icon={<TelegramIcon/>}  href="https://web.telegram.org/a/" appearance="primary"  circle />
                    <IconButton icon={<YouTubeIcon/>}  href="https://www.youtube.com/" appearance="primary" color="red" circle />
                    <IconButton icon={<TwitterIcon />} href= "https://twitter.com/?lang=uk" color="cyan" appearance="primary" circle />
                    <IconButton icon={<LinkedinIcon />}  href="https://www.linkedin.com/in/vladimir-shaitan/" color="blue" appearance="primary" circle />
                </ButtonToolbar>

            </div>


        </div>
        </div>


)

}
export default SocialBar