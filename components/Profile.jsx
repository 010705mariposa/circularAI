import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-screen'>
<h1 className="head_text text-center">
        {name}'s
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Profile and history</span>
      </h1>

      <div className='flex-between mx-auto w-2/3 py-24'>
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;