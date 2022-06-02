const { Kafka } = require("kafkajs");

async function createTopic() {
  const kafka = new Kafka({
    clientId: "kafka_client",
    brokers: ["kafka:9092"]
  });

  const admin = kafka.admin();
  await admin.connect();

  try {

    await admin.createTopics({
      topics: [
        {
          topic: "Topic",
          numPartitions: 2
        }
      ]
    });
    console.log("Topic oluşturuldu");
    await admin.disconnect();
  } catch (error) {
    console.log("Hata Oluştu", error);
  } finally {
 
  }
}

module.exports.getcreateTopic=createTopic;