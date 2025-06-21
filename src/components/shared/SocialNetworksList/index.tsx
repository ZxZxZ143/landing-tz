import {type FC} from 'react';
import {socialNetworksConfig} from "./config.ts";

const SocialNetworksList:FC<{className?: string}> = ({className}) => {
    return (
        <ul className={`social-networks-list ${className}`}>
            {
                socialNetworksConfig.map((item) => (
                    <a href={item.link}>
                        <li>
                            {<item.Svg/>}
                        </li>
                    </a>
                ))
            }
        </ul>
    );
};

export default SocialNetworksList;
