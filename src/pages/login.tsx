import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { authOptions } from "~/server/auth";
import { getServerSession } from "next-auth/next";

export default function Login({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const { data: sessionData } = useSession();
  const router = useRouter();

  return (
    <div className="h-screen overflow-hidden bg-espresso-darker text-white">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto h-64 w-auto"
            src="/images/logo.png"
            alt="Espresso"
            width={200}
            height={200}
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in with your discord account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="rounded-sm px-6 py-12 sm:px-12">
            <div>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => signIn("discord")}
                  className="btn flex w-full items-center justify-center gap-3 rounded-sm bg-espresso hover:bg-espresso-lighter text-white hover:text-black drop-shadow-lg border-0"
                >
                  <Image
                    className="h-5 w-auto"
                    src="/images/discord.svg"
                    alt="Discord"
                    width={200}
                    height={200}
                  />
                  <span className="text-sm font-semibold leading-6">
                    Discord
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/app/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
