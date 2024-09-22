import { client } from "./sanityClient";

export const getData = async () => {
    const query = `*[_type == "data"] {
    image,
    projects,
    backimage1,
    backimage2,
    backimage3,
    backimage4,
    backimage5,
    backimage6
    }`

    const data = await client.fetch(query);
    return data[0]
}