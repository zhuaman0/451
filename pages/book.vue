<template>
	<div>
	  <h2>Upload a Book</h2>
	  <form @submit.prevent="uploadBook">
		 <input type="text" v-model="title" placeholder="Book Title" required />
		 <input type="text" v-model="author" placeholder="Author" required />
		 <textarea v-model="description" placeholder="Description" required></textarea>
		 <input type="file" @change="handleFileUpload" required />
		 <button type="submit">Upload Book</button>
	  </form>
 
	  <h2>Available Books</h2>
	  <ul>
		 <li v-for="book in books" :key="book.id">
			<h3>{{ book.title }} by {{ book.author }}</h3>
			<p>{{ book.description }}</p>
			<a :href="`http://localhost:3001/uploads/books/${book.download_link}`" download>Download</a>
		 </li>
	  </ul>
	</div>
 </template>
 
 <script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const title = ref('');
const author = ref('');
const description = ref('');
const file = ref(null);
const books = ref([]);

// Handle file selection
const handleFileUpload = (event) => {
  file.value = event.target.files[0];
};

// Upload book function
const uploadBook = async () => {
  if (!file.value) return alert('Please select a file');

  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('author', author.value);
  formData.append('description', description.value);
  formData.append('file', file.value);
  formData.append('uploaded_by', 1); // Replace with teacher ID from login

  try {
    await axios.post('http://localhost:3001/uploadBook', formData);
    alert('Book uploaded successfully');
    fetchBooks();
  } catch (error) {
    console.error('Error uploading book:', error);
  }
};

// Fetch books function
const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:3001/books');
    books.value = response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

// Fetch books on component mount
onMounted(fetchBooks);
</script>
