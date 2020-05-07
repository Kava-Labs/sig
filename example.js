import sig from '.';

const mnemonic = "trouble salon husband push melody usage fine ensure blade deal miss twin"
const wallet = sig.createWalletFromMnemonic(mnemonic);
console.log(wallet)
address = sig.createAddress(wallet.publicKey, "kava")

const tx = {
  type: 'cosmos-sdk/StdTx',
  value: {
    msg: [
      {
        type: 'cosmos-sdk/MsgSend',
        value: {
          from_address: 'cosmos1qperwt9wrnkg5k9e5gzfgjppzpqhyav5j24d66',
          to_address: 'cosmos1yeckxz7tapz34kjwnjxvmxzurerquhtrmxmuxt',
          amount: [
            {
              denom: 'stake',
              amount: '1',
            },
          ],
        },
      },
    ],
    fee: {
      amount: [],
      gas: '200000',
    },
    signatures: null,
    memo: '',
  },
};

const signMeta = {
  account_number: '1',
  chain_id: 'cosmos',
  sequence: '0',
};

const stdTx = sig.signTx(tx, signMeta, wallet);

console.log(JSON.stringify(stdTx))