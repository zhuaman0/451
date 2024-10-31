<template>
    <div class="chat-app">
      <aside class="chat-list">
        <ul>
          <li
            v-for="(chat, index) in chats"
            :key="index"
            :class="{ active: index === activeChatIndex }"
            @click="selectChat(index)"
          >
            <div>{{ chat.name }}</div>
            <div>{{ chat.lastMessage }}</div>
          </li>
        </ul>
      </aside>
  
      <main class="chat-area">
        <div class="chat-header">
          <h3>{{ activeChat?.name || 'Select a Chat' }}</h3>
        </div>
  
        <div class="chat-messages" ref="messages">
          <div
            v-for="(message, index) in activeChat?.messages || []"
            :key="index"
            :class="['message', message.sender === 'you' ? 'outgoing' : 'incoming']"
          >
            <span v-if="message.type === 'text'">{{ message.text }}</span>
            <span v-if="message.type === 'file'">
              <a :href="message.fileURL" target="_blank">{{ message.fileName }}</a>
            </span>
          </div>
        </div>
  
        <div class="chat-input">
          <input
            v-model="newMessage"
            type="text"
            placeholder="Type a message..."
            @keyup.enter="sendMessage"
          />
          <label class="file-upload">
            <input type="file" @change="handleFileUpload" />
            <span><img class="icns"src="/assets/img/solar_paperclip-broken.svg" alt=""></span>
          </label>
          <button @click="sendMessage"><img class="icns"src="/assets/img/material-symbols_send-outline.svg" alt=""></button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  definePageMeta({
    layout: 'chat'
})
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const activeChatIndex = ref(null);
      const newMessage = ref('');
      const chats = ref([
        {
          name: 'Nureke',
          lastMessage: 'Hello, how are you?',
          messages: [
            { text: 'Hi, Alisher. How are you?', sender: 'other', type: 'text' },
            { text: 'I\'m good. You?', sender: 'you', type: 'text' },
          ],
        },
        {
          name: 'Yerzhan',
          lastMessage: 'Let\'s meet at the library.',
          messages: [
            { text: 'We need to discuss the book.', sender: 'other', type: 'text' },
            { text: 'Sure, I\'ll be there.', sender: 'you', type: 'text' },
          ],
        },
        {
          name: 'Team Alpha',
          lastMessage: 'Project update',
          messages: [
            { text: 'Let\'s finalize the project.', sender: 'other', type: 'text' },
            { text: 'I\'ll handle the frontend.', sender: 'you', type: 'text' },
          ],
        },
        {
          name: 'Team Beta',
          lastMessage: 'Client feedback',
          messages: [
            { text: 'We need to make some changes.', sender: 'other', type: 'text' },
            { text: 'Noted, I\'ll get started.', sender: 'you', type: 'text' },
          ],
        },
      ]);
  
      const activeChat = computed(() => (activeChatIndex.value !== null ? chats.value[activeChatIndex.value] : null));
  
      const selectChat = (index) => {
        activeChatIndex.value = index;
        scrollToBottom();
      };
  
      const sendMessage = () => {
        if (newMessage.value.trim() && activeChat.value) {
          activeChat.value.messages.push({
            text: newMessage.value,
            sender: 'you',
            type: 'text',
          });
          activeChat.value.lastMessage = newMessage.value;
          newMessage.value = '';
          scrollToBottom();
        }
      };
  
      const scrollToBottom = () => {
        setTimeout(() => {
          const messageContainer = document.querySelector('.chat-messages');
          if (messageContainer) {
            messageContainer.scrollTop = messageContainer.scrollHeight;
          }
        });
      };
  
      const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && activeChat.value) {
          const fileURL = URL.createObjectURL(file);
          activeChat.value.messages.push({
            fileName: file.name,
            fileURL: fileURL,
            sender: 'you',
            type: 'file',
          });
          activeChat.value.lastMessage = file.name;
          scrollToBottom();
        }
      };
  
      return {
        activeChat,
        activeChatIndex,
        newMessage,
        chats,
        selectChat,
        sendMessage,
        handleFileUpload,
      };
    },
  };
  </script>
  
  <style scoped>
  .chat-app {
    display: flex;
    height: 89vh;
    background: #2b2b2b;
    color: white;
  }
  
  .chat-list {
    width: 25%;
    background: #1f1f1f;
    padding: 1rem;
    overflow-y: auto;
  }
  
  .chat-list ul {
    list-style: none;
    padding: 0;
  }
  
  .chat-list li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .chat-list li.active,
  .chat-list li:hover {
  }
  
  .chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .chat-header {
    padding: 1rem;
    background: #333;
    text-align: center;
  }
  .chat-messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #2b2b2b;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  padding: 10px;
  border-radius: 5px;
  max-width: 60%;
  font-size: 1rem;
  word-wrap: break-word;
}

ul li div:nth-child(1){
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 10px;
}

.outgoing {
  background: #3e3e3e;
  align-self: flex-end;
  color: white;
  border-radius: 15px 15px 0 15px;
}

.incoming {
  background: #3e3e3e;
  align-self: flex-start;
  color: white;
  border-radius: 15px 15px 15px 0;
}
  .chat-messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    background: #2b2b2b;
  }
  
  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    max-width: 60%;
  }
  
  .chat-input {
    display: flex;
    padding: 1rem;
    background: #333;
    align-items: center;
    gap: 15px;
  }
  
  .chat-input input[type='text'] {
    flex: 1;
    height: 45px;
    padding: 0 10px;
    background: #2b2b2b;
    border: none;
    color: white;
    font-size: 15px;
  }
  
  .file-upload {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  
  .file-upload input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  
  .file-upload span {
    display: inline-block;
    background: transparent;
    color: white;
    cursor: pointer;
  }
  
  .chat-input button {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
  .icns{
    width: 30px;
  }
  </style>
  