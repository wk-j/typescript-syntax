namespace MapTypes.MT {
    type UserProfile = {
        name: string;
        age: number;
    }

    type OptionalUserProfile = Partial<UserProfile>

    let a: OptionalUserProfile = {
        name: 'John'
    }

    console.log(a)
}
