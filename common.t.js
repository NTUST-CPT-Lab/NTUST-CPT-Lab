

const app = Vue.createApp({
    data() {
        return {
            language: 'zh-tw',
            searchQuery: '',
            yearFilter: 'all',
            currentMemberFilter: 'all',
            info: {
                lab: {
                    university: {
                        name: '國立臺灣科技大學',
                        logo: 'assets/images/logo.png',
                        website: 'https://www.ntust.edu.tw',
                        address: '台北市大安區忠孝東路四段43號',
                        phone: '02-1234-5678',
                    },
                    college: {
                        name: '工學院',
                        website: 'https://www.ntust.edu.tw/college/engineering',
                    },
                    department: {
                        name: '化學工程系',
                        website: 'https://www.ntust.edu.tw/department/chemical-engineering',
                    },
                    name: '化工製程技術實驗室',
                    pi: {
                        name: '游承修',
                        title: '教授',
                        image: 'assets/images/pi.jpg',
                        description: '指導教授描述'
                    },
                    description: '<實驗室描述>',
                    members: [
                        {
                            name: '成員姓名',
                            title: '職稱',
                            image: 'assets/images/member1.jpg',
                            description: '成員描述'
                        }
                    ]
                },
                nav: {
                    home: '首頁',
                    pi: '指導教授',
                    members: '成員',
                    research: '研究領域',
                    publications: '文獻發表',
                },
                home: {
                    introduction: {
                        title: '實驗室簡介',
                        content: '國立臺灣科技大學化學工程所游承修教授的化工製程技術實驗室，專注於開發創新解決方案，應對當代化學工程的挑戰。我們的研究結合了實驗測量與理論模擬，以促進化工製程的效率、環保性及經濟效益。我們致力於培養學生在化學工程領域的專業知識和解決問題的能力，並與國內外學術界和產業界保持密切合作，共同推動相關領域的技術發展。'
                    }, 
                    // 公告欄
                    announcement: {
                        title: '公告欄',
                        content: '歡迎來到我們的實驗室網站！我們將定期更新最新消息和研究成果，敬請關注！'
                    },
                    research: {
                        title: '研究領域',
                    }
                }
            }
        }
    },


    methods: {
        changeLanguage(lang) {
            this.language = String(lang).toLowerCase();

            // parse assets/info_{lang}.json to this.info
            fetch(`assets/info_${this.language}.json`)
                .then(response => response.json())
                .then(data => {
                    this.info = data;
                })
                .catch(error => console.error('Error loading JSON:', error));
        },
        filterMembers(type) {
            this.currentMemberFilter = type;
            // 在實際應用中，這裡可以篩選不同類型的成員
        }
    }, 

    mounted() {
        // system language detection
        const userLang = navigator.language || navigator.userLanguage;
        this.changeLanguage(userLang);
    },
    
});

app.mount('#app');