import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors } = useForm({
    title: "",
    isCompleted: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('todos.store'))
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Register Todo
        </h2>
      }
    >
      <Head title="Register TODO" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label htmlFor="title">TODO</label>
                <input
                  className="block mt-1 w-full border py-1 px-3 rounded"
                  name="title"
                  id="title"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                />
                { errors.title && <p className="text-red-500">{errors.title}</p> }
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
