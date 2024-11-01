import { FaFacebook } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

const SocialMedia = (props) => {
    const { youtube, tiktok, udemy, facebook } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={youtube} target='_blank' className="highlight" title="Youtube">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok">
                <FaTiktok size={30} />
            </a>
            <a href={udemy} target='_blank' className="highlight" title="Udemy">
                <SiUdemy size={30} />
            </a>
            <a href={facebook} target='_blank' className="highlight" title="Facebook">
                <FaFacebook size={30} />
            </a>

        </div>
    )
}

export default SocialMedia;