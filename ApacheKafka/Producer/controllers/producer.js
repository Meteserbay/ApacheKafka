const { Kafka } = require("kafkajs");

let producer;
run();
async function  run(){
   const kafka = new Kafka({
    clientId: "kafka_client",
    brokers: ["kafka:9092"]
  });
  
  producer = kafka.producer();
  console.log("Producer bağlanıyor");
  await producer.connect();
  console.log("Bağlantı oluşturuldu");
  
}

async function createProducer(req,res){
 
  data=req.body;

  try {
    
    let messages = data.map(item => {
      return {
        value: "Meteserbay",
        partition: item.id == "1" ? 0 : 1
      };
    });

    const message_result = await producer.send({
      topic: "Topic",
      messages: messages
    });
    res.send(message_result);
  } catch (error) {
    console.log("Hata Oluştu", error);
  } 
}
module.exports.postcreateProducer=createProducer;