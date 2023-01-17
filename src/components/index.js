import PostDetail from "./PostDetail"

export default function Posts(props) {

    return (

        <main>
            List of posts:
            <PostDetail id={1}></PostDetail>
            <PostDetail id={2}></PostDetail>
            <PostDetail id={3}></PostDetail>
        </main>
    )
}