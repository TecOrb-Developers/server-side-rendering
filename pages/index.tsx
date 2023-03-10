import Head from 'next/head'
import { FC, useState } from 'react'

const Home: FC<{ list: any }> = ({ list }) => {
  const [data, setData] = useState(list)

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-center text-decoration-underline mt-3'>SERVER SIDE RENDERING</h1>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">S.NO.</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((list: any, index: any) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{list?.title}</td>
                <td>{list?.body}</td>
              </tr>
            )
          })}
          <tr>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export async function getServerSideProps(context: any) {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  let list = await response.json()
  return {
    props: { list }
  }
}
export default Home
