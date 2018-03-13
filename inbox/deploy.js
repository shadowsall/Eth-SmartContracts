const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require ('./compile');

const provider = new HDWalletProvider(
	'fiscal figure raw cool invite put tool tribe spatial knife name obvious',
	'https://rinkeby.infura.io/iefKh15uRWKm8P18E7Jq'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();


	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
	 .deploy({data:bytecode, arguments:['Hi there!']})
	 .send({ gas: '1000000', from: accounts[0]})
	 .then(() => {
	 	console.log('Resolved');
	 })
	 .catch(() => {
	 	console.log('Rejected');
	 });

	 console.log('Contract deployed to: ', result.options.address);
};
deploy();