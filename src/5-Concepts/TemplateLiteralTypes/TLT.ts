namespace TemplateLiteralTypes.TLT {
    type HttpMethod = "Post" | "Get" | "Put" | "Delete"
    type path = string

    type HttpEndpoint<Method extends HttpMethod, path extends string> = `${Method} /api/${path}`

    type Post = HttpEndpoint<"Post", string>
    type Get = HttpEndpoint<"Get", string>


    let user: Post = "Post /api/user"
    let group: Get = "Get /api/group"

    console.log(user)
    console.log(group)
}
