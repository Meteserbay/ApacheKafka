const { Kafka } = require("kafkajs");

createConsumer();

async function createConsumer() {
  try {
    const kafka = new Kafka({
      clientId: "kafka_client",
      brokers: ["kafka:9092"]
    });

    const consumer = kafka.consumer({
      groupId: "consumer_group"
    });

    console.log("Consumer bağlanıyor");
    await consumer.connect();
    console.log("Bağlantı oluşturuldu");


    await consumer.subscribe({
      topic: "Topic",
      fromBeginning: true
    });

    await consumer.run({
      eachMessage: async result => {
        console.log(
          `Mesaj:=>${result.message.value}`
        );
      }
    });
  } catch (error) {
    console.log("Hata Oluştu", error);
  }
}