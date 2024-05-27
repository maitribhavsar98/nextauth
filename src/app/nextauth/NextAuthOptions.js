import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import executeQuery from './MySQLConnect'

export const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 2 * 24 * 60 * 60, // 2 days
    },
    providers: [
        Credentials({
            type: "credentials",
            credentials: {
                email: { label: "E-Mail", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password", placeholder: "Enter your password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                const query = `select * from login where email="${email}" and password="${password}"`;
                const user = await executeQuery(query, []);
                if (Object.keys(user).length > 0) {
                    return {
                        Id: 1,
                        email: email,
                        user: "Dr. Vipin Classes",
                    };
                } else {
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXTAUTH_CLIENTID,
            clientSecret: process.env.NEXTAUTH_CLIENTSECRET,
        }),
    ]
}