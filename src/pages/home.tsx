import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { authOptions } from "~/server/auth";
import { getServerSession } from "next-auth/next";
import { signOut } from "next-auth/react";
import GenerationsList from "~/components/GenerationsList";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HomeLayout from "~/components/layouts/HomeLayout";

export default function HomePage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <HomeLayout>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 pt-16">
        <GenerationsList />
      </div>
    </HomeLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
