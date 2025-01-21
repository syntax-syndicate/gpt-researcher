"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8048],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1645:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(8168),o=(r(6540),r(5680));const a={},s="Vector Stores",c={unversionedId:"gpt-researcher/context/vector-stores",id:"gpt-researcher/context/vector-stores",isDocsHomePage:!1,title:"Vector Stores",description:"The GPT Researcher package allows you to integrate with existing langchain vector stores that have been populated.",source:"@site/docs/gpt-researcher/context/vector-stores.md",sourceDirName:"gpt-researcher/context",slug:"/gpt-researcher/context/vector-stores",permalink:"/docs/gpt-researcher/context/vector-stores",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/context/vector-stores.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Filtering by Domain",permalink:"/docs/gpt-researcher/context/filtering-by-domain"},next:{title:"Data Ingestion",permalink:"/docs/gpt-researcher/context/data-ingestion"}},i=[{value:"Faiss",id:"faiss",children:[],level:2},{value:"PGVector",id:"pgvector",children:[],level:2},{value:"Adding Scraped Data to your vector store",id:"adding-scraped-data-to-your-vector-store",children:[],level:2}],l={toc:i},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"vector-stores"},"Vector Stores"),(0,o.yg)("p",null,"The GPT Researcher package allows you to integrate with existing langchain vector stores that have been populated.\nFor a complete list of supported langchain vector stores, please refer to this ",(0,o.yg)("a",{parentName:"p",href:"https://python.langchain.com/v0.2/docs/integrations/vectorstores/"},"link"),"."),(0,o.yg)("p",null,"You can create a set of embeddings and langchain documents and store them in any supported vector store of your choosing.\nGPT-Researcher will work with any langchain vector store that implements the ",(0,o.yg)("inlineCode",{parentName:"p"},"asimilarity_search")," method."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"If you want to use the existing knowledge in your vector store, make sure to set ",(0,o.yg)("inlineCode",{parentName:"strong"},'report_source="langchain_vectorstore"'),". Any other settings will add additional information from scraped data and might contaminate your vectordb (See ",(0,o.yg)("em",{parentName:"strong"},"How to add scraped data to your vector store")," for more context)")),(0,o.yg)("h2",{id:"faiss"},"Faiss"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\n\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain_openai import OpenAIEmbeddings\nfrom langchain_community.vectorstores import FAISS\nfrom langchain_core.documents import Document\n\n# exerpt taken from - https://paulgraham.com/wealth.html\nessay = """\nMay 2004\n\n(This essay was originally published in Hackers & Painters.)\n\nIf you wanted to get rich, how would you do it? I think your best bet would be to start or join a startup.\nThat\'s been a reliable way to get rich for hundreds of years. The word "startup" dates from the 1960s,\nbut what happens in one is very similar to the venture-backed trading voyages of the Middle Ages.\n\nStartups usually involve technology, so much so that the phrase "high-tech startup" is almost redundant.\nA startup is a small company that takes on a hard technical problem.\n\nLots of people get rich knowing nothing more than that. You don\'t have to know physics to be a good pitcher.\nBut I think it could give you an edge to understand the underlying principles. Why do startups have to be small?\nWill a startup inevitably stop being a startup as it grows larger?\nAnd why do they so often work on developing new technology? Why are there so many startups selling new drugs or computer software,\nand none selling corn oil or laundry detergent?\n\n\nThe Proposition\n\nEconomically, you can think of a startup as a way to compress your whole working life into a few years.\nInstead of working at a low intensity for forty years, you work as hard as you possibly can for four.\nThis pays especially well in technology, where you earn a premium for working fast.\n\nHere is a brief sketch of the economic proposition. If you\'re a good hacker in your mid twenties,\nyou can get a job paying about $80,000 per year. So on average such a hacker must be able to do at\nleast $80,000 worth of work per year for the company just to break even. You could probably work twice\nas many hours as a corporate employee, and if you focus you can probably get three times as much done in an hour.[1]\nYou should get another multiple of two, at least, by eliminating the drag of the pointy-haired middle manager who\nwould be your boss in a big company. Then there is one more multiple: how much smarter are you than your job\ndescription expects you to be? Suppose another multiple of three. Combine all these multipliers,\nand I\'m claiming you could be 36 times more productive than you\'re expected to be in a random corporate job.[2]\nIf a fairly good hacker is worth $80,000 a year at a big company, then a smart hacker working very hard without \nany corporate bullshit to slow him down should be able to do work worth about $3 million a year.\n...\n...\n...\n"""\n\ndocument = [Document(page_content=essay)]\ntext_splitter = CharacterTextSplitter(chunk_size=200, chunk_overlap=30, separator="\\n")\ndocs = text_splitter.split_documents(documents=document)\n\nvector_store = FAISS.from_documents(documents, OpenAIEmbeddings())\n\nquery = """\n    Summarize the essay into 3 or 4 succinct sections.\n    Make sure to include key points regarding wealth creation.\n\n    Include some recommendations for entrepreneurs in the conclusion.\n"""\n\n\n# Create an instance of GPTResearcher\nresearcher = GPTResearcher(\n    query=query,\n    report_type="research_report",\n    report_source="langchain_vectorstore",\n    vector_store=vector_store,\n)\n\n# Conduct research and write the report\nawait researcher.conduct_research()\nreport = await researcher.write_report()\n')),(0,o.yg)("h2",{id:"pgvector"},"PGVector"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nfrom langchain_postgres.vectorstores import PGVector\nfrom langchain_openai import OpenAIEmbeddings\n\nCONNECTION_STRING = \'postgresql://someuser:somepass@localhost:5432/somedatabase\'\n\n\n# assuming the vector store exists and contains the relevent documents\n# also assuming embeddings have been or will be generated\nvector_store = PGVector.from_existing_index(\n    use_jsonb=True,\n    embedding=OpenAIEmbeddings(),\n    collection_name=\'some collection name\',\n    connection=CONNECTION_STRING,\n    async_mode=True,\n)\n\nquery = """\n    Create a short report about apples.\n    Include a section about which apples are considered best\n    during each season.\n"""\n\n# Create an instance of GPTResearcher\nresearcher = GPTResearcher(\n    query=query,\n    report_type="research_report",\n    report_source="langchain_vectorstore",\n    vector_store=vector_store, \n)\n\n# Conduct research and write the report\nawait researcher.conduct_research()\nreport = await researcher.write_report()\n')),(0,o.yg)("h2",{id:"adding-scraped-data-to-your-vector-store"},"Adding Scraped Data to your vector store"),(0,o.yg)("p",null,"In some cases in which you want to store the scraped data and documents into your own vector store for future usages, GPT-Researcher also allows you to do so seamlessly just by inputting your vector store (make sure to set ",(0,o.yg)("inlineCode",{parentName:"p"},"report_source")," value to something other than ",(0,o.yg)("inlineCode",{parentName:"p"},"langchain_vectorstore"),")"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\n\nfrom langchain_community.vectorstores import InMemoryVectorStore\nfrom langchain_openai import OpenAIEmbeddings\n\nvector_store = InMemoryVectorStore(embedding=OpenAIEmbeddings())\n\nquery = "The best LLM"\n\n# Create an instance of GPTResearcher\nresearcher = GPTResearcher(\n    query=query,\n    report_type="research_report",\n    report_source="web",\n    vector_store=vector_store, \n)\n\n# Conduct research, the context will be chunked and stored in the vector_store\nawait researcher.conduct_research()\n\n# Query the 5 most relevant context in our vector store\nrelated_contexts = await vector_store.asimilarity_search("GPT-4", k = 5) \nprint(related_contexts)\nprint(len(related_contexts)) #Should be 5 \n')))}u.isMDXComponent=!0}}]);