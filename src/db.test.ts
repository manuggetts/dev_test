import axios from 'axios';

const testUser = {
  firstName: "Manuella",
  lastName: "Oliveira",
  email: "manu@gmail.com"
};


let userId: number | null = null;

async function testCreateUser() {
  try {
    const response = await axios.post('http://localhost:4000/users', testUser);
    userId = response.data.id;
    console.log('User created successfully:', response.data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

const testPost = {
  title: "Como se tornar uma desenvolvedora Back-end",
  description: "Descrição",
  userId: null as number | null
};

async function testCreatePost() {

  testPost.userId = userId;

  try {
    const response = await axios.post('http://localhost:4000/posts', testPost);
    console.log('Post created successfully:', response.data);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

async function init() {
  await testCreateUser();
  await testCreatePost();
}

init();