import{dm as T,dn as y,cn as E,a7 as X,a4 as l,l as re,t as v,dp as J,dq as h,dr as oe,F as _,ds as se,a0 as ie,bT as ce,am as O,dt as L,du as N,dv as de,dw as W,cN as pe,dx as ge,dy as ue,dz as Z,cd as he,bN as le}from"./Bridge.jzjokbd9.js";import{A as fe}from"./algorand-CbdjZ1lv.k0au7wuv.js";import"./index.bwmrk3ti.js";import"./vue.fv0erkdm.js";import"./lodash-es.bp0zmem9.js";import"./axios.i01mok01.js";import"./dayjs.pb8a0t5b.js";import"./vuex.jdzbw26m.js";import"./vue-router.jwqkmej7.js";import"./svg-icons.nw66rbkj.js";var me=Object.defineProperty,Ae=(a,e,t)=>e in a?me(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,c=(a,e,t)=>Ae(a,typeof e!="symbol"?e+"":e,t);class ye{constructor(e,t,r,n,o=!1){c(this,"transaction"),c(this,"network"),c(this,"chain"),c(this,"description"),c(this,"parallelizable"),this.transaction=e,this.network=t,this.chain=r,this.description=n,this.parallelizable=o}}const Q=1002e3,V=15,Y=127,F=8,G=Y*F,ee=Y*V,j=F*ee,w={_limit:127,encodingLength:a=>{let e=0;for(;a>=128;e++)a>>=7;return e+1},encode:(a,e,t)=>{if(typeof a=="bigint"&&(a=h(a)),a<0)throw new RangeError("value must be unsigned");const r=w.encodingLength(a);if(e=e||new ArrayBuffer(r),t=t||0,e.byteLength<t+r)throw new RangeError("the buffer is too small to encode the number at the offset");const n=new Uint8Array(e,t);let o=0;for(;w._limit<a;)n[o++]=a&w._limit|128,a>>=7;return n[o]=Number(a),n},decode:(a,e=0)=>{let t=0,r=0,n;do{if(n=a[e+r],n===void 0)throw new RangeError("offset out of range");t+=(n&w._limit)<<r*7,r++}while(128<=n);return t}},g={forMessageId:(a,e)=>{const t=T(y(a)).publicKey,r=e.emitter.toUniversalAddress().toUint8Array(),n=E.toBytes(BigInt(X(e.chain)),2),o=l.concat(n,r);return g.fromData({appId:a,appAddress:t,idx:e.sequence/BigInt(j),address:o})},forWrappedAsset:(a,e)=>{if(re(e.address))throw new Error("native asset cannot be a wrapped asset");const t=T(y(a)).publicKey;return g.fromData({appId:a,appAddress:t,idx:BigInt(X(e.chain)),address:e.address.toUniversalAddress().toUint8Array()})},forNativeAsset:(a,e)=>{const t=T(y(a)).publicKey;return g.fromData({appId:a,appAddress:t,idx:e,address:l.encode("native")})},forGuardianSet:(a,e)=>{const t=T(y(a)).publicKey;return g.fromData({appId:a,appAddress:t,idx:BigInt(e),address:l.encode("guardian")})},forEmitter:(a,e)=>{const t=T(y(a)).publicKey;return g.fromData({appId:a,appAddress:t,idx:0n,address:e})},_encode:a=>typeof a=="bigint"?[v.encode(w.encode(a))]:[v.encode(w.encode(a.length)),v.encode(a)],fromData:a=>{const e=["0620010181",...g._encode(a.idx),"4880",...g._encode(a.address),"483110810612443119221244311881",...g._encode(a.appId),"1244312080",...g._encode(a.appAddress),"124431018100124431093203124431153203124422"],t=v.decode(e.join(""));return new J(t)},decodeLocalState:async(a,e,t)=>{let r;try{const s=await a.accountApplicationInformation(t,h(e)).do();r=oe.from_obj_for_encoding(s).appLocalState}catch{return new Uint8Array}const n=_.encode("meta");let o=new Map;for(const s of r.keyValue){if(s.key===n)continue;const p=_.decode(s.key)[0],u=_.decode(s.value.bytes);o.set(p,u)}const i=[];for(let s=0;s<V;s++)o.has(s)&&i.push(o.get(s));return l.concat(...i)},checkBitsSet:async(a,e,t,r)=>{let n=!1,o;const i=await a.accountInformation(t).do(),s=se.from_obj_for_encoding(i).appsLocalState;if(s&&s.forEach(I=>{BigInt(I.id)===e&&(o=I.keyValue)}),(o==null?void 0:o.length)===0)return n;const p=BigInt(j),u=BigInt(8),m=r/p*p,b=h(r-m),x=Math.floor(b/G),k=Math.floor((b-x*G)/8),S=_.encode(E.toBytes(x,1));return o==null||o.forEach(I=>{if(I.key===S){const M=ie.Buffer.from(I.value.bytes,"base64"),P=1<<h(r%u);n=(M[k]&P)!=0;return}}),n},storageAccountExists:async(a,e,t)=>{try{const r=await a.accountApplicationInformation(e,h(t)).do();return Object.keys(r).length>0}catch{}return!1}},A=class d{constructor(e,t,r,n){if(c(this,"network"),c(this,"chain"),c(this,"connection"),c(this,"contracts"),c(this,"chainId"),c(this,"coreAppId"),c(this,"coreAppAddress"),c(this,"tokenBridgeAppId"),c(this,"tokenBridgeAppAddress"),this.network=e,this.chain=t,this.connection=r,this.contracts=n,this.chainId=X(t),!n.coreBridge)throw new Error(`Core contract address for chain ${t} not found`);const o=BigInt(n.coreBridge);if(this.coreAppId=o,this.coreAppAddress=y(o),!n.tokenBridge)throw new Error(`TokenBridge contract address for chain ${t} not found`);const i=BigInt(n.tokenBridge);this.tokenBridgeAppId=i,this.tokenBridgeAppAddress=y(i)}getGuardianSet(e){throw new Error("Method not implemented.")}async*verifyMessage(e,t,r){const n=new O(e).toString(),o=await d.submitVAAHeader(this.connection,this.coreAppId,r??this.coreAppId,t,n);for(const i of o.txs)yield this.createUnsignedTx(i,"Core.verifyMessage")}static async fromRpc(e,t){const[r,n]=await fe.chainFromRpc(e),o=t[n];if(o.network!==r)throw new Error(`Network mismatch: ${o.network} !== ${r}`);return new d(r,n,e,o.contracts)}async*publishMessage(e,t){const r=new O(e),n=r.toString(),o=await this.connection.getTransactionParams().do(),i=g.forEmitter(this.coreAppId,r.toUint8Array()),{accounts:s,txs:p}=await d.maybeCreateStorageTx(this.connection,n,this.coreAppId,i,o);for(const m of p)yield this.createUnsignedTx(m,"Core.publishMessage",!0);const u=L({from:n,appIndex:h(this.coreAppId),appArgs:[d.publishMessage,t,E.toBytes(0n,8)],accounts:s,onComplete:N.NoOpOC,suggestedParams:o});yield this.createUnsignedTx({tx:u},"Core.publishMessage",!0)}async getMessageFee(){var e;const t=await this.connection.getApplicationByID(h(this.coreAppId)).do(),r=(e=de.from_obj_for_encoding(t).params.globalState)==null?void 0:e.find(n=>n.key===d.feeKey);return r?BigInt(r.value.uint):0n}async getGuardianSetIndex(){throw new Error("Not implemented")}async parseTransaction(e){const t=await this.connection.pendingTransactionInformation(e).do(),r=W.from_obj_for_encoding(t);return this.parseTx(r).map(n=>({chain:n.emitterChain,emitter:n.emitterAddress,sequence:n.sequence}))}async parseMessages(e){const t=await this.connection.pendingTransactionInformation(e).do(),r=W.from_obj_for_encoding(t);return this.parseTx(r)}parseTx(e){const t=[];if(e.innerTxns&&e.innerTxns.length>0&&t.push(...e.innerTxns.flatMap(p=>this.parseTx(p))),BigInt(e.txn.txn.apid??0)!==this.coreAppId||!e.logs||e.logs.length===0)return t;const r=e.txn.txn.apaa??[];if(r.length!==3||!l.equals(new Uint8Array(r[0]),d.publishMessage))return t;const n=E.decode(e.logs[0]),o=new O(e.txn.txn.snd).toUniversalAddress(),i=new Uint8Array(r[1]),s=E.decode(r[2]);return t.push(pe("Uint8Array",{emitterChain:this.chain,emitterAddress:o,sequence:n,guardianSet:0,timestamp:0,consistencyLevel:0,nonce:Number(s),payload:i,signatures:[]})),t}static async maybeCreateStorageTx(e,t,r,n,o){const i=y(r),s=n.address(),p=[];if(await g.storageAccountExists(e,s,r))return{accounts:[s],txs:p};o=o??await e.getTransactionParams().do();const u=ge({from:t,to:s,amount:Q,suggestedParams:o});u.fee=u.fee*2,p.push({tx:u});const m=ue({from:s,appIndex:h(r),rekeyTo:i,suggestedParams:o});return m.fee=0,p.push({tx:m,signer:{address:n.address(),signTxn:b=>Promise.resolve(Z(b,n).blob)}}),{accounts:[s],txs:p}}static async submitVAAHeader(e,t,r,n,o,i){i=i??await e.getTransactionParams().do();let s=[];const p=g.forMessageId(r,{chain:n.emitterChain,sequence:n.sequence,emitter:n.emitterAddress}),{accounts:u,txs:m}=await d.maybeCreateStorageTx(e,o,r,p,i);s.push(...m);const b=g.forGuardianSet(t,n.guardianSet),{accounts:[x],txs:k}=await d.maybeCreateStorageTx(e,o,t,b,i);s.push(...k);let S=[...u,x];const I=await g.decodeLocalState(e,t,x),M=he(n.hash),P=n.signatures.length,K=Math.ceil(P/d.MAX_SIGS_PER_TXN),R=20,D=new J(d.ALGO_VERIFY);for(let U=0;U<K;U++){const $=U*d.MAX_SIGS_PER_TXN,B=n.signatures.slice($,$+d.MAX_SIGS_PER_TXN),ne=B.length*R,q=new Uint8Array(ne);for(let f=0;f<B.length;f++){const z=B[f],ae=I.slice(z.guardianIndex*R+1,(z.guardianIndex+1)*R+1);q.set(ae,f*20)}const H=L({appArgs:[d.verifySigs,l.concat(...B.map(f=>l.concat(new Uint8Array([f.guardianIndex]),f.signature.encode()))),q,M],accounts:S,appIndex:h(t),from:d.ALGO_VERIFY_HASH,onComplete:N.NoOpOC,suggestedParams:i});H.fee=0,s.push({tx:H,signer:{address:D.address(),signTxn:f=>Promise.resolve(Z(f,D).blob)}})}const C=L({appArgs:[d.verifyVaa,le(n)],accounts:S,appIndex:h(t),from:o,onComplete:N.NoOpOC,suggestedParams:i});return C.fee=C.fee*(2+K),s.push({tx:C}),{accounts:S,txs:s}}createUnsignedTx(e,t,r=!0){return new ye(e,this.network,this.chain,t,r)}};c(A,"MAX_SIGS_PER_TXN",6),c(A,"ALGO_VERIFY_HASH","EZATROXX2HISIRZDRGXW4LRQ46Z6IUJYYIHU3PJGP7P5IQDPKVX42N767A"),c(A,"ALGO_VERIFY",new Uint8Array([6,32,4,1,0,32,20,38,1,0,49,32,50,3,18,68,49,1,35,18,68,49,16,129,6,18,68,54,26,1,54,26,3,54,26,2,136,0,3,68,34,67,53,2,53,1,53,0,40,53,240,40,53,241,52,0,21,53,5,35,53,3,35,53,4,52,3,52,5,12,65,0,68,52,1,52,0,52,3,129,65,8,34,88,23,52,0,52,3,34,8,36,88,52,0,52,3,129,33,8,36,88,7,0,53,241,53,240,52,2,52,4,37,88,52,240,52,241,80,2,87,12,20,18,68,52,3,129,66,8,53,3,52,4,37,8,53,4,66,255,180,34,137])),c(A,"feeKey",_.encode("MessageFee")),c(A,"verifyVaa",l.encode("verifyVAA")),c(A,"verifySigs",l.encode("verifySigs")),c(A,"publishMessage",l.encode("publishMessage"));let te=A;ce("Algorand","WormholeCore",te);const ke=Object.freeze(Object.defineProperty({__proto__:null,AlgorandWormholeCore:te,BITS_PER_BYTE:F,BITS_PER_KEY:G,MAX_BITS:j,MAX_BYTES:ee,MAX_BYTES_PER_KEY:Y,MAX_KEYS:V,SEED_AMT:Q,StorageLogicSig:g,varint:w},Symbol.toStringTag,{value:"Module"}));export{te as A,g as S,ye as a,ke as i};