(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{1002:function(e,n){},1014:function(e,n){},1017:function(e,n){},1047:function(e,n){},1049:function(e,n){},1056:function(e,n){},1057:function(e,n){},1174:function(e,n){},1175:function(e,n){},1197:function(e,n){},1199:function(e,n){},1424:function(e,n){},1598:function(e,n){},1658:function(e,n){},1665:function(e,n){},1707:function(e,n,t){e.exports=t.p+"static/media/logo.8d648e15.png"},1708:function(e,n,t){e.exports=t.p+"static/media/key.39cac507.png"},1709:function(e,n,t){e.exports=t.p+"static/media/mbox.7099974a.png"},1721:function(e,n,t){e.exports=t.p+"static/media/box.c2c05f2b.png"},1722:function(e,n,t){e.exports=t.p+"static/media/market.8672fbd5.png"},1723:function(e,n,t){e.exports=t.p+"static/media/fighting.333c65dc.png"},1724:function(e,n,t){e.exports=t.p+"static/media/mining.c154cb87.png"},1725:function(e,n,t){e.exports=t.p+"static/media/bag.0c48ed35.png"},1726:function(e,n){},718:function(e,n,t){"use strict";var a=t(11),o=t.n(a),r=t(0),i=t.n(r),s=t(1758),u=t(86),c=t(1756),l=t(87),p=t(1755),d=t(1757),y=t(263),f=t.n(y),m=t(31),b=t.n(m),g=t(269),h=t(4),w=t(5),T=t(34),x=t(84),v=t(58),E=t(85),k=t(15),C=t.n(k),P=t(193),M=t.n(P),A=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"BoxBought",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"price",type:"uint256"}],name:"BoxPriceChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"cardTokenId",type:"uint256"}],name:"CardBorned",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bool",name:"enabled",type:"bool"}],name:"CardExchangeEnabled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"who",type:"address"},{indexed:!1,internalType:"uint256",name:"cardTokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"reward",type:"uint256"}],name:"CardExchanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"token",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokenEmergencyWithdraw",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"BURN_PERCENT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"BUY_MAX_AMOUNT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"FIRE_TOKEN",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"PAY_TOKEN",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ROUTER_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"boxPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"buyBox",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cardExchangeEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"emergencyWithdrawPaymentToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"cardTokenId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"exchangeCardForReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"cardTokenId",type:"uint256[]"},{internalType:"uint256[]",name:"amount",type:"uint256[]"}],name:"exchangeMultipleCardForReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"who",type:"address"}],name:"getTokenAmount",outputs:[{internalType:"uint256[]",name:"amount",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"who",type:"address"},{internalType:"uint256",name:"tokenIndex",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"openBox",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"price",type:"uint256"}],name:"setBoxPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setCardExchangeEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setTokenBaseUri",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],I="0xfE54e3c480db77AE8dc5B5804Eb95B4E943e1578";var B=function e(n,t){var a=this;C()(this,e),this.getTokenAmount=function(){var e;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(a.contract.methods.getTokenAmount(a.account).call());case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),null,null,null,Promise)},this.getBoxPrice=function(){var e;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(a.contract.methods.boxPrice().call());case 2:return e=n.sent,n.abrupt("return",a.web3.utils.toBN(e));case 4:case"end":return n.stop()}}),null,null,null,Promise)},this.buyBox=function(e,n,t){return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,b.a.awrap(a.contract.methods.buyBox(e).send({from:a.account}).once("receipt",(function(e){console.log(e)})).on("error",(function(e){console.log(e),t(e)})).then((function(e){n(e)})));case 2:case"end":return o.stop()}}),null,null,null,Promise)},this.openBox=function(e,n,t){return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,b.a.awrap(a.contract.methods.openBox(e).send({from:a.account}).once("receipt",(function(e){console.log(e)})).on("error",(function(e){console.log(e),t(e)})).then((function(e){n(e)})));case 2:case"end":return o.stop()}}),null,null,null,Promise)},this.library=n,this.web3=new M.a(n.provider),this.contract=new this.web3.eth.Contract(A,I),this.account=t},O=t(758);function S(e){var n=Object(r.useState)(null),t=o()(n,2),a=t[0],s=t[1];return i.a.useEffect((function(){!function(e,n){var t="https://gateway.pinata.cloud/ipfs/QmNy7YWP5TpM6d7hYmT2znLsoGhSww3xax19dA3WRUAVbV/"+function(e){return e.toString(16).padStart(64,"0")}(e)+".json";O.get(t).then((function(e){200==e.status&&n(e.data)}))}(e.tokenId,(function(e){s(e)}))}),[]),i.a.createElement(w.a,{style:e.style},i.a.createElement(w.a,{style:_.container},a?i.a.createElement(l.a,{style:{width:"100%",height:120,resizeMode:"center"},source:{uri:a.image}}):i.a.createElement(w.a,{style:{width:"100%",height:120}}),e.showCount?i.a.createElement(T.a,{style:_.text},"Count: ",i.a.createElement(T.a,{style:_.zeroCountText},e.count)):null))}var _=h.a.create({container:{paddingBottom:10,width:"100%",backgroundColor:"#2d2d2d",color:"#000000",textAlign:"center",display:"flex",flexDirection:"column",borderRadius:5},text:{color:"#e0e0e0",fontSize:12},zeroCountText:{color:"#e0e0e0"},otherCountText:{color:"#ffffff",fontWeight:"bold"}}),N=t(395),R=t(692),j=t.n(R),F=i.a.createContext({tokenAmount:[],updateTokenAmount:function(e){j()(e)}});function z(){return i.a.useContext(F)}var L=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}];var U,D=function e(n,t,a,o){var r=this;C()(this,e),this.allowance=function(e){var n;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(r.contract.methods.allowance(r.account,e).call());case 2:return n=t.sent,t.abrupt("return",r.web3.utils.toBN(n));case 4:case"end":return t.stop()}}),null,null,null,Promise)},this.approve=function(e,n,t,a){return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,b.a.awrap(r.contract.methods.approve(e,n).send({from:r.account}).once("receipt",(function(e){console.log(e)})).on("error",(function(e){console.log(e),a(e)})).then((function(e){t(e)})));case 2:case"end":return o.stop()}}),null,null,null,Promise)},this.library=n,this.web3=new M.a(n.provider),this.contract=new this.web3.eth.Contract(L,a),this.account=t,this.decimal=o},V=t(10),W=t.n(V),Y=new W.a(2).pow(new W.a(256)).sub(new W.a(1)),K=v.a.get("window").width;g.a.div(U||(U=f()(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  align-content: flex-start;\n  \n  &:after {\n    content: "";\n    flex: 1 1 auto;\n  }\n'])));function H(){var e=Object(u.c)(),n=e.library,t=e.account,a=n&&t&&new B(n,t),r=n&&t&&new D(n,t,"0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",18),s=z(),c=s.tokenAmount,l=s.updateTokenAmount;function p(){var e;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(null==a?void 0:a.getTokenAmount());case 2:e=n.sent,l(e);case 4:case"end":return n.stop()}}),null,null,null,Promise)}i.a.useEffect((function(){p()}),[n,t]);var d=i.a.useState(1),y=o()(d,2),f=y[0],m=y[1],g=i.a.useState(1),h=o()(g,2),v=h[0],k=h[1],C=i.a.useState("Buy"),P=o()(C,2),M=P[0],A=P[1],O=i.a.useState("Open"),_=o()(O,2),R=_[0],j=_[1];return i.a.createElement(E.a,{style:G.container},i.a.createElement(x.a,null,i.a.createElement(T.a,{style:G.title},"Buy Box"),i.a.createElement(T.a,{style:G.column},i.a.createElement(S,{style:G.card,tokenId:0,count:0}),i.a.createElement(T.a,{style:G.row},i.a.createElement(N.a,{style:G.input,onChangeText:function(e){if(e.length>0){var n=parseInt(e);n<0&&(n=0),n>100&&(n=100),m(n)}else m(0)},value:f,keyboardType:"numeric"}),i.a.createElement(T.a,{onPress:function(){var e,n;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(null==r?void 0:r.allowance(I));case 2:return e=t.sent,t.next=5,b.a.awrap(null==a?void 0:a.getBoxPrice());case 5:if(n=t.sent,!e.lt(n)){t.next=10;break}return A("Approving..."),t.next=10,b.a.awrap(null==r?void 0:r.approve(I,Y,(function(e){console.log(e)}),(function(e){console.log(e),A("Approve Failed")})));case 10:A("Buying..."),null==a||a.buyBox(f,(function(e){console.log("buy success, info: "+e),p(),m(1),A("Buy")}),(function(e){console.log("buy failed, error: "+e),A("Buy Failed")}));case 12:case"end":return t.stop()}}),null,null,null,Promise)},style:G.button},M))),i.a.createElement(w.a,{style:{marginTop:14}}),i.a.createElement(T.a,{style:G.title},"Open Boxes"),i.a.createElement(T.a,{style:G.column},i.a.createElement(S,{style:G.card,tokenId:0,count:c?c[0]:0,showCount:!0}),i.a.createElement(T.a,{style:G.row},i.a.createElement(N.a,{style:G.input,onChangeText:function(e){if(c&&e.length>0){var n=parseInt(e)>c[0]?c[0]:parseInt(e);k(n)}else k(0)},value:v,keyboardType:"numeric"}),i.a.createElement(T.a,{onPress:function(){console.log("open"),j("Openning..."),null==a||a.openBox(v,(function(e){console.log("open success, info: "+e),p(),j("Open")}),(function(e){console.log("open failed, error: "+e),j("Open Failed")}))},style:G.button},R)))))}var G=h.a.create({container:{flex:1,backgroundColor:"#080d13",padding:10},card:{marginTop:10,width:(K-20-20)/3,marginLeft:20/6,marginRight:20/6},text:{color:"#ffffffff"},title:{color:"#ffffff",fontSize:14,fontWeight:"bold"},column:{marginTop:8,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#424242"},input:{width:"30%",height:30,margin:12,borderWidth:1,padding:4,color:"#ffffff",borderColor:"#ffffff",borderRadius:5,textAlign:"center"},button:{width:"30%",color:"#ffffff",textAlign:"center",fontSize:14,backgroundColor:"#18a3ff",padding:4,height:30,borderRadius:5,display:"block"},row:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}),J=t(110);function $(){return i.a.createElement(E.a,{style:q.container},i.a.createElement(J.a,{backgroundColor:"transparent",translucent:!0}))}var q=h.a.create({container:{flex:1,backgroundColor:"#080d13"}});function Q(){return i.a.createElement(E.a,{style:X.container},i.a.createElement(J.a,{backgroundColor:"transparent",translucent:!0}))}var X=h.a.create({container:{flex:1,backgroundColor:"#080d13"}});function Z(){return i.a.createElement(E.a,{style:ne.container},i.a.createElement(J.a,{backgroundColor:"transparent",translucent:!0}))}var ee,ne=h.a.create({container:{flex:1,backgroundColor:"#080d13"}}),te=v.a.get("window").width,ae=g.a.div(ee||(ee=f()(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  align-content: flex-start;\n  \n  &:after {\n    content: "";\n    flex: 1 1 auto;\n  }\n'])));function oe(){var e=Object(u.c)(),n=e.library,t=e.account,a=n&&t&&new B(n,t),o=z(),r=o.tokenAmount,s=o.updateTokenAmount;function c(){var e;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(null==a?void 0:a.getTokenAmount());case 2:e=n.sent,s(e);case 4:case"end":return n.stop()}}),null,null,null,Promise)}return i.a.useEffect((function(){c()}),[n,t]),setInterval((function(){return b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:c();case 1:case"end":return e.stop()}}),null,null,null,Promise)}),2e4),i.a.createElement(E.a,{style:re.container},i.a.createElement(x.a,null,i.a.createElement(T.a,{style:re.title},"Poker Boxes"),r&&r[0]>0?i.a.createElement(ae,null,i.a.createElement(S,{style:re.card,tokenId:0,count:r[0],showCount:!0})):i.a.createElement(w.a,{style:re.empty},i.a.createElement(T.a,{style:re.text},"No Poker Boxes")),i.a.createElement(w.a,{style:{marginTop:16}}),i.a.createElement(T.a,{style:re.title},"Poker Cards"),i.a.createElement(ae,null,r?r.map((function(e,n){if(0!=n&&0!=e)return i.a.createElement(S,{style:re.card,tokenId:n,count:e,showCount:!0,key:n})})):i.a.createElement(w.a,{style:re.empty},i.a.createElement(T.a,{style:re.text},"No Poker Cards")))))}var re=h.a.create({container:{flex:1,backgroundColor:"#080d13",padding:10},card:{marginTop:10,width:(te-20-20)/3,marginLeft:20/6,marginRight:20/6},text:{color:"#ffffffff"},title:{color:"#ffffff",fontSize:14,fontWeight:"bold"},empty:{backgroundColor:"#2d2d2d",borderRadius:5,marginTop:10,padding:10,color:"#ffffff",fontSize:10}}),ie=t(719),se=t(231),ue=t(270),ce=t(271),le=t(697),pe=t(698),de=t(699),ye=t(701),fe=t(704),me=t(707),be=t(708),ge=t(709),he=t(710),we=t(711),Te={1:Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"CryptoPoker",slug:"CryptoPoker",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},web:{},description:"",sdkVersion:"42.0.0",platforms:["ios","android","web"]}}).RPC_URL_1,4:Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"CryptoPoker",slug:"CryptoPoker",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},web:{},description:"",sdkVersion:"42.0.0",platforms:["ios","android","web"]}}).RPC_URL_4},xe=new se.a({supportedChainIds:[1,3,4,5,42,56,97]});new le.a({urls:{1:"https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",4:"https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213"},defaultChainId:1}),new ue.b({rpc:{1:"https://mainnet.infura.io/v3/84842078b09946638c03157f83405213"},qrcode:!0}),new pe.a({url:"https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",appName:"web3-react example",supportedChainIds:[1,3,4,5,42,10,137,69,420,80001]}),new de.a({chainId:1,url:"https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",pollingInterval:12e3}),new ye.a({chainId:1,url:"https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",pollingInterval:12e3,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"}),new fe.a({chainId:4,appName:"web3-react",url:Te[4]}),new ce.a({supportedChainIds:[1]}),new me.a({chainId:42}),new be.a({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"CryptoPoker",slug:"CryptoPoker",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},web:{},description:"",sdkVersion:"42.0.0",platforms:["ios","android","web"]}}).FORTMATIC_API_KEY,chainId:4}),new ge.a({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"CryptoPoker",slug:"CryptoPoker",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},web:{},description:"",sdkVersion:"42.0.0",platforms:["ios","android","web"]}}).MAGIC_API_KEY,chainId:4,email:"hello@example.org"}),new he.a({dAppId:Object({NODE_ENV:"production",PUBLIC_URL:"",APP_MANIFEST:{name:"CryptoPoker",slug:"CryptoPoker",version:"1.0.0",orientation:"portrait",icon:"./assets/icon.png",splash:{image:"./assets/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},web:{},description:"",sdkVersion:"42.0.0",platforms:["ios","android","web"]}}).PORTIS_DAPP_ID,networks:[1,100]}),new we.a({chainId:1});var ve=function(){var e=Object(u.c)(),n=(e.connector,e.library,e.chainId,e.account),t=e.activate,a=e.deactivate,s=e.active,c=e.error,l=Object(r.useState)("Connect"),p=o()(l,2),d=p[0],y=p[1],f=i.a.useState(!1),m=o()(f,2),g=m[0],h=m[1];return i.a.useEffect((function(){s&&n?(h(!0),y(n.substring(0,6)+"..."+n.substring(n.length-4))):(h(!1),y("Connect"))}),[s]),i.a.useEffect((function(){console.log(c?function(e){return e instanceof se.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof u.a?"You're connected to an unsupported network.":e instanceof se.c||e instanceof ue.a||e instanceof ce.b?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}(c):"")}),[c]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(u.c)(),t=n.active,a=n.error,o=n.activate;Object(r.useEffect)((function(){var n=window.ethereum;if(n&&n.on&&!t&&!a&&!e){var r=function(){console.log("Handling 'connect' event"),o(xe)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),o(xe)},s=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&o(xe)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),o(xe)};return n.on("connect",r),n.on("chainChanged",i),n.on("accountsChanged",s),n.on("networkChanged",u),function(){n.removeListener&&(n.removeListener("connect",r),n.removeListener("chainChanged",i),n.removeListener("accountsChanged",s),n.removeListener("networkChanged",u))}}}),[t,a,e,o])}(!function(){var e=Object(u.c)(),n=e.activate,t=e.active,a=Object(r.useState)(!1),i=o()(a,2),s=i[0],c=i[1];return Object(r.useEffect)((function(){xe.isAuthorized().then((function(e){e?n(xe,void 0,!0).catch((function(){c(!0)})):c(!0)}))}),[]),Object(r.useEffect)((function(){!s&&t&&c(!0)}),[s,t]),s}()),i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{style:Ee.buttonText,onPress:function(){g?a():b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.awrap(t(xe));case 2:case"end":return e.stop()}}),null,null,null,Promise)}},d))},Ee=h.a.create({buttonText:{padding:4,width:100,fontSize:10,textAlign:"center",color:"#ffffff",backgroundColor:"transparent"}});function ke(){return i.a.createElement(E.a,{style:Ce.container},i.a.createElement(w.a,null,i.a.createElement(l.a,{source:t(1707),style:Ce.image})),i.a.createElement(w.a,{style:Ce.rowContainer},i.a.createElement(w.a,{style:Ce.row},i.a.createElement(l.a,{source:t(1708),style:Ce.icon}),i.a.createElement(T.a,{style:Ce.text},"$123.1234")),i.a.createElement(w.a,{style:{width:6}}),i.a.createElement(w.a,{style:Ce.row},i.a.createElement(l.a,{source:t(1709),style:Ce.icon}),i.a.createElement(T.a,{style:Ce.text},"$123.1234"))),i.a.createElement(w.a,null,i.a.createElement(ie.a,{colors:["#5ecbe4","#4391e8","#2859eb"]},i.a.createElement(ve,null))))}var Ce=h.a.create({container:{backgroundColor:"#14181e",flexDirection:"row",padding:8,justifyContent:"space-between",alignItems:"center"},image:{width:55,height:30},rowContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},row:{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},icon:{width:20,height:20},text:{color:"#ffffffe6",fontSize:10},linearGradient:{borderRadius:5,start:0,end:1},buttonText:{padding:4,fontSize:10,textAlign:"center",color:"#ffffff",backgroundColor:"transparent"}}),Pe=Object(d.a)();var Me=function(){return i.a.createElement(p.a,null,i.a.createElement(Pe.Navigator,{initialRouteName:"Box",screenOptions:function(e){var n=e.route;return{tabBarIcon:function(e){e.focused,e.color;var a=e.size,o="";return"Box"===n.name?o=t(1721):"Market"===n.name?o=t(1722):"Fighting"===n.name?o=t(1723):"Mining"===n.name?o=t(1724):"Bag"===n.name&&(o=t(1725)),i.a.createElement(l.a,{source:o,style:{width:a,height:a}})},headerShown:!0,header:function(e){return i.a.createElement(ke,null)},tabBarStyle:{backgroundColor:"#14181e"},tabBarItemStyle:{},tabBarLabelStyle:{fontSize:8},tabBarActiveBackgroundColor:"#2b3341",tabBarActiveTintColor:"#ffffff"}}},i.a.createElement(Pe.Screen,{name:"Box",component:H,options:{title:"Box"}}),i.a.createElement(Pe.Screen,{name:"Bag",component:oe}),i.a.createElement(Pe.Screen,{name:"Market",component:$}),i.a.createElement(Pe.Screen,{name:"Fighting",component:Q}),i.a.createElement(Pe.Screen,{name:"Mining",component:Z})))};function Ae(e){var n=new c.a(e);return n.pollingInterval=12e3,n}n.a=function(){var e=i.a.useState([]),n=o()(e,2),t=n[0],a=n[1];return i.a.createElement(u.b,{getLibrary:Ae},i.a.createElement(s.c,null,i.a.createElement(F.Provider,{value:{tokenAmount:t,updateTokenAmount:a}},i.a.createElement(Me,null))))}},739:function(e,n,t){e.exports=t(1734)},790:function(e,n){},792:function(e,n){},796:function(e,n){},800:function(e,n){},824:function(e,n){},826:function(e,n){},835:function(e,n){},837:function(e,n){},846:function(e,n){},848:function(e,n){},935:function(e,n){},937:function(e,n){},965:function(e,n){},967:function(e,n){},968:function(e,n){},973:function(e,n){},975:function(e,n){},981:function(e,n){},983:function(e,n){}},[[739,6,7]]]);
//# sourceMappingURL=app.0f5e0c60.chunk.js.map