# 👶TigerGPT UI

TigerGPT UI is designed to make it easier to run and develop with [TigerGPT](https://github.com/yoheinakajima/TigerGPT) in a web app, like a ChatGPT.
This is a port of [TigerGPT](https://github.com/yoheinakajima/TigerGPT) with [Langchain.js](https://github.com/hwchase17/langchainjs) and build a user interface.



## 🧰 Stack

- [Next.js](https://nextjs.org/)
- [Pinecone](https://www.pinecone.io/)
- [LangChain.js](https://github.com/hwchase17/langchainjs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🚗 Roadmap

- [x] The TigerGPT can search and scrape the web. ([🐝 TigerGPT]
- [x] Exporting Execution Results
- [x] Execution history
- [x] Faster speeds and fewer errors. ([😺 BabyCatAGI]
- [x] i18n support ( 🇧🇷, 🇩🇪, 🇺🇸, 🇪🇸, 🇫🇷, 🇮🇳, 🇭🇺, 🇯🇵, 🇷🇺, 🇹🇭, ... and much more)
- [x] User feedback
- [x] Improv UX for task creation (only BabyCatAGI🐱 & Client request)
- [ ] Display the current task and task list
- [ ] Other LLM models support

and more ...

## 👉 Getting Started

1. Clone the repository

```sh
git clone https://github.com/metadev26/TigerGPT-ui
```

2. Go to the project holder

```sh
cd TigerGPT-ui
```

3. Install packages with npm

```sh
npm install
```

4. Setup your .env file. And set the variables.
   - You need to create an index in advance with [Pinecone](https://www.pinecone.io/).
     - [Reference setting](./public/pinecone-setup.png)
   - Set your SerpAPI Key, if you want to use the search tool with TigerGPT.

```sh
cp .env.example .env
```

5. Run the project

```sh
npm run dev
```

## 🚀 Deploy



## Credit

