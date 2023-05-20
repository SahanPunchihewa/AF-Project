import { useContext } from "react";
import Spinner from "../../components/spinner";
import SampleContext from "../../contexts/SampleContext";

const PostList = () => {
  const { posts, postsLoading, refetchPosts } = useContext(SampleContext);

  return (
    <div></div>
    // <div className="container mx-auto px-4">
    //   <h1 className="mt-5 text-4xl text-center">Post List</h1>

    //   {postsLoading && <Spinner />}

    //   <div className="flex flex-col items-center justify-center">
    //     <button
    //       className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md"
    //       onClick={() => refetchPosts()}
    //     >
    //       Refetch
    //     </button>
    //   </div>

    //   {posts?.data?.map((post) => (
    //     <div key={post.id} className="mt-5">
    //       <h1 className="text-2xl">{post.title}</h1>
    //       <p>{post.body}</p>
    //     </div>
    //   ))}
    // </div>

    // <div className="container mx-auto px-4 my-5">
    //   <div className="flex flex-col">
    //     <div className="-m-1.5 overflow-x-auto">
    //       <div className="p-1.5 min-w-full inline-block align-middle">
    //         <div className="border rounded-lg shadow overflow-hidden">
    //           <table className="min-w-full divide-y divide-gray-200">
    //             <thead className="bg-gray-50">
    //               <tr>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   ID
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Title
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Body
    //                 </th>
    //               </tr>
    //             </thead>
    //             <tbody className="divide-y divide-gray-200">
    //               {posts?.data?.map((post) => (
    //                 <tr key={post.id}>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
    //                     {post.id}
    //                   </td>
    //                   <td className="px-6 py-4 text-sm text-gray-800">
    //                     {post.title}
    //                   </td>
    //                   <td className="px-6 py-4 text-sm text-gray-800">
    //                     {post.body}
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PostList;
