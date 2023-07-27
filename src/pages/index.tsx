export default function indexPage() {
    return <></>;
  }
  
  export async function getServerSideProps() {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }