import { useSearchParams } from "react-router-dom"

const Article = () => {
    const [params] = useSearchParams()
    let id = params.get("id");
    let username = params.get("username");

    return (
    <div>
        This is article page
        <br></br>
        {id}{username}
    </div>
    )
}

export default Article