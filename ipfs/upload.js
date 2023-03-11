async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = create();
    
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Evolve",
            attributes: [
            {
                "trait_type": "Struggle",
                "value": "10" 
            },
            {
                "trait_type": "Growth",
                "value": "100"
            },
            {
                "trait_type": "Love",
                "value": "1000"
            }
            ],
            image: "https://gateway.pinata.cloud/ipfs/QmVyc17psCs5RrzNfFR8Zw36kqp3Jwkvu1uBswFP1vVmof",
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();