type Shape =
    | Square of {| Size: int |}
    | Rectangle of {| Width: int; Height: int |}
    | Circle of {| Radius: int |}
