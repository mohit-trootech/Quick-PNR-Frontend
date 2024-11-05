/**Nav Bar Links */
import utils from "../utils/utils";

function NavBarLinks() {
    /**Nav Bar Links Based on User Authentication */
    const user = utils.getLocalStorage("user");
    if (user) {
        return (
            <>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/logout">Logout</a></li>
            </>
        );
    } else {
        return (
            <>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </>
        );
    }
}

export default NavBarLinks;