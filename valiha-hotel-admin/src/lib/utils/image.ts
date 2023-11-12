const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const getUserPicture = (path: string) => {
    return `${BASE_URL}/USERS-SERVICE/uploads/${path}`;
}
