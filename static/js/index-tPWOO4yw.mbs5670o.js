import{b2 as u,by as Z,bz as K,bA as x,bB as j,bC as Y,bD as ee,e as ne,bW as B,S as b,b6 as T,bU as ae,b7 as ie,cC as O,bV as E,bY as D,cG as se,bT as te,g as re,a0 as M,cv as U,cH as me,t as oe,cp as N,cq as _,cM as C}from"./Bridge.kcbhiddz.js";import"./index.gj1dsgp4.js";import"./vue.ij1rt9yd.js";import"./lodash-es.bp0zmem9.js";import"./axios.i01mok01.js";import"./dayjs.pb8a0t5b.js";import"./swiper.jxnsts7f.js";import"./vuex.i01hmc51.js";import"./vue-router.ii2ni9cp.js";import"./svg-icons.nc57d0by.js";var ue=Object.defineProperty,de=(s,e,a)=>e in s?ue(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,S=(s,e,a)=>de(s,typeof e!="symbol"?e+"":e,a);const h=new u("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");new u("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");const w=new u("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");new u("So11111111111111111111111111111111111111112");new u("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");class ge extends Error{constructor(e){super(e)}}class ce extends ge{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}const pe=Z([K("mintAuthorityOption"),x("mintAuthority"),j("supply"),Y("decimals"),ee("isInitialized"),K("freezeAuthorityOption"),x("freezeAuthority")]);pe.span;function ye(s,e,a=!1,i=h,t=w){if(!a&&!u.isOnCurve(e.toBuffer()))throw new ce;const[n]=u.findProgramAddressSync([e.toBuffer(),i.toBuffer(),s.toBuffer()],t);return n}function le(s,e,a,i,t=h,n=w){return Me(s,e,a,i,M.Buffer.alloc(0),t,n)}function Me(s,e,a,i,t,n=h,m=w){const r=[{pubkey:s,isSigner:!0,isWritable:!0},{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:U.programId,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!1,isWritable:!1}];return new me({keys:r,programId:m,data:t})}function W(s,e){return new N($.TokenMessengerIdl,new u(s),e===void 0?{connection:null}:e)}function Se(s,e){return W(s,_(e))}function L(s,e){return new N($.MessageTransmitterIdl,new u(s),e===void 0?{connection:null}:e)}function ke(s,e){return L(s,_(e))}const o=(s,e,a)=>{const i=[M.Buffer.from(C.bytes.utf8.encode(s))];if(a)for(const n of a)typeof n=="string"?i.push(M.Buffer.from(C.bytes.utf8.encode(n))):Array.isArray(n)?i.push(M.Buffer.from(n)):M.Buffer.isBuffer(n)?i.push(n):i.push(n.toBuffer());const t=u.findProgramAddressSync(i,e);return{publicKey:t[0],bump:t[1]}};function fe(s,e,a,i,t,n,m,r,d){const g=o("message_transmitter",s),y=o("token_messenger",e),p=o("token_minter",e),l=o("local_token",e,[a]),k=o("remote_token_messenger",e,[i.toString()]),f=o("sender_authority",e),P=W(e),v=o("__event_authority",e);return P.methods.depositForBurn({amount:new O(r.toString()),destinationDomain:i,mintRecipient:new u(m.toUint8Array())}).accounts({owner:t,senderAuthorityPda:f.publicKey,burnTokenAccount:n,messageTransmitter:g.publicKey,tokenMessenger:y.publicKey,remoteTokenMessenger:k.publicKey,tokenMinter:p.publicKey,localToken:l.publicKey,burnTokenMint:a,messageTransmitterProgram:s,tokenMessengerMinterProgram:e,tokenProgram:h,eventAuthority:v.publicKey,eventRentPayer:t,messageSentEventData:d}).instruction()}const R=6400n;function z(s){return(s-BigInt(1))/R*R+BigInt(1)}function F(s,e,a){const i=e.toString();return o("used_nonces",a,[i,z(s).toString()]).publicKey}async function he(s,e,a,i,t,n){const m=M.Buffer.from(E.serialize(i)),r=M.Buffer.from(oe.decode(t)),d=new u(a),g=new u(i.payload.burnToken.toUint8Array()),y=new b(i.payload.mintRecipient).unwrap(),p=n?new u(n):y,l=i.sourceDomain.toString(),k=o("message_transmitter",s),f=o("token_messenger",e),P=o("token_minter",e),v=o("local_token",e,[d]),V=o("remote_token_messenger",e,[l]),H=o("token_pair",e,[l,g]),G=o("custody",e,[d]),X=o("message_transmitter_authority",s,[e]).publicKey,q=F(i.nonce,i.sourceDomain,s),J=o("__event_authority",s),Q=o("__event_authority",e),c=[];c.push({isSigner:!1,isWritable:!1,pubkey:f.publicKey}),c.push({isSigner:!1,isWritable:!1,pubkey:V.publicKey}),c.push({isSigner:!1,isWritable:!0,pubkey:P.publicKey}),c.push({isSigner:!1,isWritable:!0,pubkey:v.publicKey}),c.push({isSigner:!1,isWritable:!1,pubkey:H.publicKey}),c.push({isSigner:!1,isWritable:!0,pubkey:y}),c.push({isSigner:!1,isWritable:!0,pubkey:G.publicKey}),c.push({isSigner:!1,isWritable:!1,pubkey:h}),c.push({isSigner:!1,isWritable:!1,pubkey:Q.publicKey}),c.push({isSigner:!1,isWritable:!1,pubkey:e});const I=L(s);return I.methods.receiveMessage({message:m,attestation:r}).accounts({payer:p,caller:p,authorityPda:X,messageTransmitter:k.publicKey,usedNonces:q,receiver:e,systemProgram:U.programId,eventAuthority:J.publicKey,program:I.programId}).remainingAccounts(c).transaction()}class A{constructor(e,a,i,t){S(this,"network"),S(this,"chain"),S(this,"connection"),S(this,"contracts"),S(this,"tokenMessenger"),S(this,"messageTransmitter");var n,m;if(this.network=e,this.chain=a,this.connection=i,this.contracts=t,e==="Devnet")throw new Error("CircleBridge not supported on Devnet");const r=(n=t.cctp)==null?void 0:n.messageTransmitter;if(!r)throw new Error(`Circle Messenge Transmitter contract for domain ${a} not found`);this.messageTransmitter=ke(new u(r),this.connection);const d=(m=t.cctp)==null?void 0:m.tokenMessenger;if(!d)throw new Error(`Circle Token Messenger contract for domain ${a} not found`);this.tokenMessenger=Se(new u(d),this.connection)}static async fromRpc(e,a){const[i,t]=await ne.chainFromRpc(e),n=a[t];if(n.network!==i)throw new Error(`Network mismatch: ${n.network} != ${i}`);return new A(i,t,e,n.contracts)}async*redeem(e,a,i){const t=new u(B.get(this.network,this.chain)),n=new b(e).unwrap(),m=new b(a.payload.mintRecipient).unwrap();if(!await this.connection.getAccountInfo(m)){const g=new T().add(le(n,m,n,t));g.feePayer=n,yield this.createUnsignedTx({transaction:g},"CircleBridge.CreateATA")}const r=await he(this.messageTransmitter.programId,this.tokenMessenger.programId,t,a,i,n),d=new T;d.feePayer=n,d.add(r),yield this.createUnsignedTx({transaction:d},"CircleBridge.Redeem")}async*transfer(e,a,i){const t=new u(B.get(this.network,this.chain)),n=new b(e).unwrap(),m=ye(t,n),r=ae.get(this.network,a.chain),d=a.address.toUniversalAddress(),g=ie.generate(),y=await fe(this.messageTransmitter.programId,this.tokenMessenger.programId,t,r,n,m,d,i,g.publicKey),p=new T;p.feePayer=n,p.add(y),yield this.createUnsignedTx({transaction:p,signers:[g]},"CircleBridge.Transfer")}async isTransferCompleted(e){const a=F(e.nonce,e.sourceDomain,this.messageTransmitter.programId),i=z(e.nonce),{usedNonces:t}=await this.messageTransmitter.account.usedNonces.fetch(a),n=Number(e.nonce-i),m=t[Math.floor(n/64)];if(!m)throw new Error("Invalid nonce byte index");const r=n%64,d=new O((BigInt(1)<<BigInt(r)).toString());return!m.and(d).isZero()}async parseTransactionDetails(e){const a=await this.connection.getTransaction(e);if(!a||!a.meta)throw new Error("Transaction not found");const i=a.transaction.message.getAccountKeys();if(i.length<2)throw new Error("No message account found");const t=i.get(1),n=await this.connection.getAccountInfo(t);if(!n)throw new Error("No account data found");const m=new Uint8Array(n.data).slice(44),[r,d]=E.deserialize(m),{payload:g}=r,y=g.messageSender,p=g.mintRecipient,l=D(this.network,r.sourceDomain),k=D(this.network,r.destinationDomain),f={chain:l,address:g.burnToken};return{from:{chain:l,address:y},to:{chain:k,address:p},token:f,amount:g.amount,message:r,id:{hash:d}}}createUnsignedTx(e,a,i=!1){return new se(e,this.network,this.chain,a,i)}}const be={version:"0.1.0",name:"token_messenger_minter",instructions:[{name:"initialize",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"upgradeAuthority",isMut:!1,isSigner:!0},{name:"authorityPda",isMut:!1,isSigner:!1},{name:"tokenMessenger",isMut:!0,isSigner:!1},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"tokenMessengerMinterProgramData",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"InitializeParams"}}]},{name:"transferOwnership",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"TransferOwnershipParams"}}]},{name:"acceptOwnership",accounts:[{name:"pendingOwner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AcceptOwnershipParams"}}]},{name:"addRemoteTokenMessenger",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AddRemoteTokenMessengerParams"}}]},{name:"removeRemoteTokenMessenger",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"RemoveRemoteTokenMessengerParams"}}]},{name:"depositForBurn",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!1},{name:"burnTokenAccount",isMut:!0,isSigner:!1},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"burnTokenMint",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"DepositForBurnParams"}}],returns:"u64"},{name:"depositForBurnWithCaller",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!1},{name:"burnTokenAccount",isMut:!0,isSigner:!1},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"burnTokenMint",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"DepositForBurnWithCallerParams"}}],returns:"u64"},{name:"replaceDepositForBurn",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!1},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"ReplaceDepositForBurnParams"}}],returns:"u64"},{name:"handleReceiveMessage",accounts:[{name:"authorityPda",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"tokenPair",isMut:!1,isSigner:!1},{name:"recipientTokenAccount",isMut:!0,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"HandleReceiveMessageParams"}}]},{name:"setTokenController",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetTokenControllerParams"}}]},{name:"pause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"PauseParams"}}]},{name:"unpause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UnpauseParams"}}]},{name:"updatePauser",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UpdatePauserParams"}}]},{name:"setMaxBurnAmountPerMessage",accounts:[{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetMaxBurnAmountPerMessageParams"}}]},{name:"addLocalToken",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"localTokenMint",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AddLocalTokenParams"}}]},{name:"removeLocalToken",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"RemoveLocalTokenParams"}}]},{name:"linkTokenPair",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"tokenPair",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"LinkTokenPairParams"}}]},{name:"unlinkTokenPair",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"tokenPair",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UninkTokenPairParams"}}]},{name:"burnTokenCustody",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!1,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"custodyTokenMint",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"BurnTokenCustodyParams"}}]}],accounts:[{name:"tokenMessenger",type:{kind:"struct",fields:[{name:"owner",type:"publicKey"},{name:"pendingOwner",type:"publicKey"},{name:"localMessageTransmitter",type:"publicKey"},{name:"messageBodyVersion",type:"u32"},{name:"authorityBump",type:"u8"}]}},{name:"remoteTokenMessenger",type:{kind:"struct",fields:[{name:"domain",type:"u32"},{name:"tokenMessenger",type:"publicKey"}]}},{name:"tokenMinter",type:{kind:"struct",fields:[{name:"tokenController",type:"publicKey"},{name:"pauser",type:"publicKey"},{name:"paused",type:"bool"},{name:"bump",type:"u8"}]}},{name:"tokenPair",type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"remoteToken",type:"publicKey"},{name:"localToken",type:"publicKey"},{name:"bump",type:"u8"}]}},{name:"localToken",type:{kind:"struct",fields:[{name:"custody",type:"publicKey"},{name:"mint",type:"publicKey"},{name:"burnLimitPerMessage",type:"u64"},{name:"messagesSent",type:"u64"},{name:"messagesReceived",type:"u64"},{name:"amountSent",type:"u128"},{name:"amountReceived",type:"u128"},{name:"bump",type:"u8"},{name:"custodyBump",type:"u8"}]}}],types:[{name:"AcceptOwnershipParams",type:{kind:"struct",fields:[]}},{name:"AddRemoteTokenMessengerParams",type:{kind:"struct",fields:[{name:"domain",type:"u32"},{name:"tokenMessenger",type:"publicKey"}]}},{name:"DepositForBurnWithCallerParams",type:{kind:"struct",fields:[{name:"amount",type:"u64"},{name:"destinationDomain",type:"u32"},{name:"mintRecipient",type:"publicKey"},{name:"destinationCaller",type:"publicKey"}]}},{name:"DepositForBurnParams",type:{kind:"struct",fields:[{name:"amount",type:"u64"},{name:"destinationDomain",type:"u32"},{name:"mintRecipient",type:"publicKey"}]}},{name:"HandleReceiveMessageParams",type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"sender",type:"publicKey"},{name:"messageBody",type:"bytes"},{name:"authorityBump",type:"u8"}]}},{name:"InitializeParams",type:{kind:"struct",fields:[{name:"tokenController",type:"publicKey"},{name:"localMessageTransmitter",type:"publicKey"},{name:"messageBodyVersion",type:"u32"}]}},{name:"RemoveRemoteTokenMessengerParams",type:{kind:"struct",fields:[]}},{name:"ReplaceDepositForBurnParams",type:{kind:"struct",fields:[{name:"originalMessage",type:"bytes"},{name:"originalAttestation",type:"bytes"},{name:"newDestinationCaller",type:"publicKey"},{name:"newMintRecipient",type:"publicKey"}]}},{name:"TransferOwnershipParams",type:{kind:"struct",fields:[{name:"newOwner",type:"publicKey"}]}},{name:"AddLocalTokenParams",type:{kind:"struct",fields:[]}},{name:"BurnTokenCustodyParams",type:{kind:"struct",fields:[{name:"amount",type:"u64"}]}},{name:"LinkTokenPairParams",type:{kind:"struct",fields:[{name:"localToken",type:"publicKey"},{name:"remoteDomain",type:"u32"},{name:"remoteToken",type:"publicKey"}]}},{name:"PauseParams",type:{kind:"struct",fields:[]}},{name:"RemoveLocalTokenParams",type:{kind:"struct",fields:[]}},{name:"SetMaxBurnAmountPerMessageParams",type:{kind:"struct",fields:[{name:"burnLimitPerMessage",type:"u64"}]}},{name:"SetTokenControllerParams",type:{kind:"struct",fields:[{name:"tokenController",type:"publicKey"}]}},{name:"UninkTokenPairParams",type:{kind:"struct",fields:[]}},{name:"UnpauseParams",type:{kind:"struct",fields:[]}},{name:"UpdatePauserParams",type:{kind:"struct",fields:[{name:"newPauser",type:"publicKey"}]}},{name:"TokenMinterError",type:{kind:"enum",variants:[{name:"InvalidAuthority"},{name:"InvalidTokenMinterState"},{name:"ProgramPaused"},{name:"InvalidTokenPairState"},{name:"InvalidLocalTokenState"},{name:"InvalidPauser"},{name:"InvalidTokenController"},{name:"BurnAmountExceeded"},{name:"InvalidAmount"}]}}],events:[{name:"OwnershipTransferStarted",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"OwnershipTransferred",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"DepositForBurn",fields:[{name:"nonce",type:"u64",index:!1},{name:"burnToken",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1},{name:"depositor",type:"publicKey",index:!1},{name:"mintRecipient",type:"publicKey",index:!1},{name:"destinationDomain",type:"u32",index:!1},{name:"destinationTokenMessenger",type:"publicKey",index:!1},{name:"destinationCaller",type:"publicKey",index:!1}]},{name:"MintAndWithdraw",fields:[{name:"mintRecipient",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1},{name:"mintToken",type:"publicKey",index:!1}]},{name:"RemoteTokenMessengerAdded",fields:[{name:"domain",type:"u32",index:!1},{name:"tokenMessenger",type:"publicKey",index:!1}]},{name:"RemoteTokenMessengerRemoved",fields:[{name:"domain",type:"u32",index:!1},{name:"tokenMessenger",type:"publicKey",index:!1}]},{name:"SetTokenController",fields:[{name:"tokenController",type:"publicKey",index:!1}]},{name:"PauserChanged",fields:[{name:"newAddress",type:"publicKey",index:!1}]},{name:"SetBurnLimitPerMessage",fields:[{name:"token",type:"publicKey",index:!1},{name:"burnLimitPerMessage",type:"u64",index:!1}]},{name:"LocalTokenAdded",fields:[{name:"custody",type:"publicKey",index:!1},{name:"mint",type:"publicKey",index:!1}]},{name:"LocalTokenRemoved",fields:[{name:"custody",type:"publicKey",index:!1},{name:"mint",type:"publicKey",index:!1}]},{name:"TokenPairLinked",fields:[{name:"localToken",type:"publicKey",index:!1},{name:"remoteDomain",type:"u32",index:!1},{name:"remoteToken",type:"publicKey",index:!1}]},{name:"TokenPairUnlinked",fields:[{name:"localToken",type:"publicKey",index:!1},{name:"remoteDomain",type:"u32",index:!1},{name:"remoteToken",type:"publicKey",index:!1}]},{name:"Pause",fields:[]},{name:"Unpause",fields:[]},{name:"TokenCustodyBurned",fields:[{name:"custodyTokenAccount",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1}]}],errors:[{code:6e3,name:"InvalidAuthority",msg:"Invalid authority"},{code:6001,name:"InvalidTokenMessengerState",msg:"Invalid token messenger state"},{code:6002,name:"InvalidTokenMessenger",msg:"Invalid token messenger"},{code:6003,name:"InvalidOwner",msg:"Invalid owner"},{code:6004,name:"MalformedMessage",msg:"Malformed message"},{code:6005,name:"InvalidMessageBodyVersion",msg:"Invalid message body version"},{code:6006,name:"InvalidAmount",msg:"Invalid amount"},{code:6007,name:"InvalidDestinationDomain",msg:"Invalid destination domain"},{code:6008,name:"InvalidDestinationCaller",msg:"Invalid destination caller"},{code:6009,name:"InvalidMintRecipient",msg:"Invalid mint recipient"},{code:6010,name:"InvalidSender",msg:"Invalid sender"},{code:6011,name:"InvalidTokenPair",msg:"Invalid token pair"},{code:6012,name:"InvalidTokenMint",msg:"Invalid token mint"}]},Pe={version:"0.1.0",name:"message_transmitter",instructions:[{name:"initialize",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"upgradeAuthority",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageTransmitterProgramData",isMut:!1,isSigner:!1},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"InitializeParams"}}]},{name:"transferOwnership",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"TransferOwnershipParams"}}]},{name:"acceptOwnership",accounts:[{name:"pendingOwner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AcceptOwnershipParams"}}]},{name:"updatePauser",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UpdatePauserParams"}}]},{name:"updateAttesterManager",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UpdateAttesterManagerParams"}}]},{name:"pause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"PauseParams"}}]},{name:"unpause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UnpauseParams"}}]},{name:"setMaxMessageBodySize",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetMaxMessageBodySizeParams"}}]},{name:"enableAttester",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"attesterManager",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"EnableAttesterParams"}}]},{name:"disableAttester",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"attesterManager",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"DisableAttesterParams"}}]},{name:"setSignatureThreshold",accounts:[{name:"attesterManager",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetSignatureThresholdParams"}}]},{name:"sendMessage",accounts:[{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"senderProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SendMessageParams"}}],returns:"u64"},{name:"sendMessageWithCaller",accounts:[{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"senderProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SendMessageWithCallerParams"}}],returns:"u64"},{name:"replaceMessage",accounts:[{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"senderProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"ReplaceMessageParams"}}],returns:"u64"},{name:"receiveMessage",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"caller",isMut:!1,isSigner:!0},{name:"authorityPda",isMut:!1,isSigner:!1},{name:"messageTransmitter",isMut:!1,isSigner:!1},{name:"usedNonces",isMut:!0,isSigner:!1},{name:"receiver",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"ReceiveMessageParams"}}]},{name:"reclaimEventAccount",accounts:[{name:"payee",isMut:!0,isSigner:!0,docs:["rent SOL receiver, should match original rent payer"]},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!1}],args:[{name:"params",type:{defined:"ReclaimEventAccountParams"}}]},{name:"getNoncePda",accounts:[{name:"messageTransmitter",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"GetNoncePDAParams"}}],returns:"publicKey"},{name:"isNonceUsed",accounts:[{name:"usedNonces",isMut:!1,isSigner:!1,docs:["Account will be explicitly loaded to avoid error when it's not initialized"]}],args:[{name:"params",type:{defined:"IsNonceUsedParams"}}],returns:"bool"}],accounts:[{name:"messageSent",type:{kind:"struct",fields:[{name:"rentPayer",type:"publicKey"},{name:"message",type:"bytes"}]}},{name:"messageTransmitter",docs:["Main state of the MessageTransmitter program"],type:{kind:"struct",fields:[{name:"owner",type:"publicKey"},{name:"pendingOwner",type:"publicKey"},{name:"attesterManager",type:"publicKey"},{name:"pauser",type:"publicKey"},{name:"paused",type:"bool"},{name:"localDomain",type:"u32"},{name:"version",type:"u32"},{name:"signatureThreshold",type:"u32"},{name:"enabledAttesters",type:{vec:"publicKey"}},{name:"maxMessageBodySize",type:"u64"},{name:"nextAvailableNonce",type:"u64"}]}},{name:"usedNonces",docs:["UsedNonces account holds an array of bits that indicate which nonces were already used","so they can't be resused to receive new messages. Array starts with the first_nonce and","holds flags for UsedNonces::MAX_NONCES. Nonces are recorded separately for each remote_domain."],type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"firstNonce",type:"u64"},{name:"usedNonces",type:{array:["u64",100]}}]}}],types:[{name:"AcceptOwnershipParams",type:{kind:"struct",fields:[]}},{name:"DisableAttesterParams",type:{kind:"struct",fields:[{name:"attester",type:"publicKey"}]}},{name:"EnableAttesterParams",type:{kind:"struct",fields:[{name:"newAttester",type:"publicKey"}]}},{name:"GetNoncePDAParams",type:{kind:"struct",fields:[{name:"nonce",type:"u64"},{name:"sourceDomain",type:"u32"}]}},{name:"InitializeParams",type:{kind:"struct",fields:[{name:"localDomain",type:"u32"},{name:"attester",type:"publicKey"},{name:"maxMessageBodySize",type:"u64"},{name:"version",type:"u32"}]}},{name:"IsNonceUsedParams",type:{kind:"struct",fields:[{name:"nonce",type:"u64"}]}},{name:"PauseParams",type:{kind:"struct",fields:[]}},{name:"ReceiveMessageParams",type:{kind:"struct",fields:[{name:"message",type:"bytes"},{name:"attestation",type:"bytes"}]}},{name:"HandleReceiveMessageParams",type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"sender",type:"publicKey"},{name:"messageBody",type:"bytes"},{name:"authorityBump",type:"u8"}]}},{name:"ReclaimEventAccountParams",type:{kind:"struct",fields:[{name:"attestation",type:"bytes"}]}},{name:"ReplaceMessageParams",type:{kind:"struct",fields:[{name:"originalMessage",type:"bytes"},{name:"originalAttestation",type:"bytes"},{name:"newMessageBody",type:"bytes"},{name:"newDestinationCaller",type:"publicKey"}]}},{name:"SendMessageWithCallerParams",type:{kind:"struct",fields:[{name:"destinationDomain",type:"u32"},{name:"recipient",type:"publicKey"},{name:"messageBody",type:"bytes"},{name:"destinationCaller",type:"publicKey"}]}},{name:"SendMessageParams",type:{kind:"struct",fields:[{name:"destinationDomain",type:"u32"},{name:"recipient",type:"publicKey"},{name:"messageBody",type:"bytes"}]}},{name:"SetMaxMessageBodySizeParams",type:{kind:"struct",fields:[{name:"newMaxMessageBodySize",type:"u64"}]}},{name:"SetSignatureThresholdParams",type:{kind:"struct",fields:[{name:"newSignatureThreshold",type:"u32"}]}},{name:"TransferOwnershipParams",type:{kind:"struct",fields:[{name:"newOwner",type:"publicKey"}]}},{name:"UnpauseParams",type:{kind:"struct",fields:[]}},{name:"UpdateAttesterManagerParams",type:{kind:"struct",fields:[{name:"newAttesterManager",type:"publicKey"}]}},{name:"UpdatePauserParams",type:{kind:"struct",fields:[{name:"newPauser",type:"publicKey"}]}},{name:"MathError",type:{kind:"enum",variants:[{name:"MathOverflow"},{name:"MathUnderflow"},{name:"ErrorInDivision"}]}}],events:[{name:"OwnershipTransferStarted",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"OwnershipTransferred",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"PauserChanged",fields:[{name:"newAddress",type:"publicKey",index:!1}]},{name:"AttesterManagerUpdated",fields:[{name:"previousAttesterManager",type:"publicKey",index:!1},{name:"newAttesterManager",type:"publicKey",index:!1}]},{name:"MessageReceived",fields:[{name:"caller",type:"publicKey",index:!1},{name:"sourceDomain",type:"u32",index:!1},{name:"nonce",type:"u64",index:!1},{name:"sender",type:"publicKey",index:!1},{name:"messageBody",type:"bytes",index:!1}]},{name:"SignatureThresholdUpdated",fields:[{name:"oldSignatureThreshold",type:"u32",index:!1},{name:"newSignatureThreshold",type:"u32",index:!1}]},{name:"AttesterEnabled",fields:[{name:"attester",type:"publicKey",index:!1}]},{name:"AttesterDisabled",fields:[{name:"attester",type:"publicKey",index:!1}]},{name:"MaxMessageBodySizeUpdated",fields:[{name:"newMaxMessageBodySize",type:"u64",index:!1}]},{name:"Pause",fields:[]},{name:"Unpause",fields:[]}],errors:[{code:6e3,name:"InvalidAuthority",msg:"Invalid authority"},{code:6001,name:"ProgramPaused",msg:"Instruction is not allowed at this time"},{code:6002,name:"InvalidMessageTransmitterState",msg:"Invalid message transmitter state"},{code:6003,name:"InvalidSignatureThreshold",msg:"Invalid signature threshold"},{code:6004,name:"SignatureThresholdAlreadySet",msg:"Signature threshold already set"},{code:6005,name:"InvalidOwner",msg:"Invalid owner"},{code:6006,name:"InvalidPauser",msg:"Invalid pauser"},{code:6007,name:"InvalidAttesterManager",msg:"Invalid attester manager"},{code:6008,name:"InvalidAttester",msg:"Invalid attester"},{code:6009,name:"AttesterAlreadyEnabled",msg:"Attester already enabled"},{code:6010,name:"TooFewEnabledAttesters",msg:"Too few enabled attesters"},{code:6011,name:"SignatureThresholdTooLow",msg:"Signature threshold is too low"},{code:6012,name:"AttesterAlreadyDisabled",msg:"Attester already disabled"},{code:6013,name:"MessageBodyLimitExceeded",msg:"Message body exceeds max size"},{code:6014,name:"InvalidDestinationCaller",msg:"Invalid destination caller"},{code:6015,name:"InvalidRecipient",msg:"Invalid message recipient"},{code:6016,name:"SenderNotPermitted",msg:"Sender is not permitted"},{code:6017,name:"InvalidSourceDomain",msg:"Invalid source domain"},{code:6018,name:"InvalidDestinationDomain",msg:"Invalid destination domain"},{code:6019,name:"InvalidMessageVersion",msg:"Invalid message version"},{code:6020,name:"InvalidUsedNoncesAccount",msg:"Invalid used nonces account"},{code:6021,name:"InvalidRecipientProgram",msg:"Invalid recipient program"},{code:6022,name:"InvalidNonce",msg:"Invalid nonce"},{code:6023,name:"NonceAlreadyUsed",msg:"Nonce already used"},{code:6024,name:"MessageTooShort",msg:"Message is too short"},{code:6025,name:"MalformedMessage",msg:"Malformed message"},{code:6026,name:"InvalidSignatureOrderOrDupe",msg:"Invalid signature order or dupe"},{code:6027,name:"InvalidAttesterSignature",msg:"Invalid attester signature"},{code:6028,name:"InvalidAttestationLength",msg:"Invalid attestation length"},{code:6029,name:"InvalidSignatureRecoveryId",msg:"Invalid signature recovery ID"},{code:6030,name:"InvalidSignatureSValue",msg:"Invalid signature S value"},{code:6031,name:"InvalidMessageHash",msg:"Invalid message hash"}]};te(re,"CircleBridge",A);const $={TokenMessengerIdl:be,MessageTransmitterIdl:Pe};export{A as SolanaCircleBridge,$ as idl};