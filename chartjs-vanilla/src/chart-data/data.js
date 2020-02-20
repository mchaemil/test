let coronaData = [];
function createData() {
  for (let i = 0; i < 100; i++) {
    let data = {
      date: i < 10 ? '2020010' + i : '202001' + i, 
      newsVolume: i,
    }
    coronaData.push(data)
  }
}

createData()

export let newsDate = []
export let newsVolumes = []
coronaData.forEach(elem => {
  newsDate.push(elem.date)
  newsVolumes.push(elem.newsVolume)
});

