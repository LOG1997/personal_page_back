exports.getskill = async (req, res) => {
  let result = [];

  result = [
    {
      icon: "1",
      version: "v3.2",
      title: "Vue",
      desc: "渐进式Javascript框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      id: "21",
      color: "green",
    },
    {
      icon: "2",
      version: "v3.2",
      title: "Vue",
      desc: "渐进式Javascript框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      id: "21",
      color: "red",
    },
    {
      icon: "3",
      version: "v3.2",
      title: "Vue",
      desc: "渐进式Javascript框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      id: "21",
      color: "blue",
    },
    {
      icon: "4",
      version: "v3.2",
      title: "Vue",
      desc: "渐进式Javascript框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      id: "21",
      color: "red",
    },
    {
      icon: "5",
      version: "v3.2",
      title: "Vue",
      desc: "渐进式Javascript框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      id: "21",
      color: "green",
    },
    {
      icon: "6",
      version: "v3.2",
      title: "Vue",
      desc: "渐进式Javascript框架,易学易用，性能出色，适用场景丰富的 Web 前端框架。",
      id: "21",
      color: "green",
    },
  ];
  return res.json({ msg: "success", data: result });
};
exports.getResume = async (req, res) => {
  let result = {};
  result = {
    name: "张log",
    age: "18",
    avatar: "https://avatars.githubusercontent.com/u/26322485?v=4",
    position: "前端工程师",
    birthday: "2021-03-19",
    address: "成都，四川",
    website: "https://24years.top",
    email: "m.bhlvpge@qq.com",
    phone: "18173980561",
    github: "https://github.com/LOG1997",
    desc: "躬耕陇亩，好为《梁父吟》。身长八尺，每自比于管仲、乐毅，时人莫之许也。惟博陵崔州平、颍川徐庶元直与亮友善，谓为信然。",
    introduce:
      "一个自信的性格，一个放松的状态，以及一种让人亲近的感觉，这就是我，来自xxxx，我毕业于xxxx。我是一个非常乐观的女孩，最大的特质就是执着，只要是我所选择的事情，我所选择的道路，我都会非常坚定的走下去。我喜欢挑战自我，喜欢在强手之中找到自己的位置，如果胜利我会嫣然一笑，如果失败我会得到更大的动力，争取更大的成功。",
    education: [
      {
        school: "中国农民大学",
        degree: "本科",
        school_time: "1971-02-07 11:46:13",
      },
    ],
    skills: [
      {
        skill: "vue",
        skill_desc: "前端",
      },
      {
        skill: "nodeJs",
        skill_desc: "后端",
      },
      {
        skill: "mysql",
        skill_desc: "数据库",
      },
    ],
    job_experience: [
      {
        company: "核动力科学院",
        companyPic: "tengxun",
        time_slot: "1988-02-21~2012-2-18",
        job_desc:
          "云虚拟主机是一种网站托管服务。产品预装了常见网站开发语言的运行环境和管理工具，用户可以利用云虚拟主机来简单、低成本的发布托管网站。",
        position: "前端工程师",
      },
      {
        company: "盖亚研究所",
        companyPic: "tuite",
        time_slot: "1985-10-18~1988-1-32",
        job_desc:
          "轻量服务器默认享有免费版云安全中心防护，防护项有限，推荐您购买防病毒版云安全中心可以享有更多安全防护轻量服务器只展示云安全中心的常用基础功能，更多功能请前往云安全中心控制台",
        position: "前端工程师",
      },
      {
        company: "盖亚研究所",
        companyPic: "aiqiyi",
        time_slot: "1985-10-18~1988-1-32",
        job_desc:
          "轻量服务器默认享有免费版云安全中心防护，防护项有限，推荐您购买防病毒版云安全中心可以享有更多安全防护轻量服务器只展示云安全中心的常用基础功能，更多功能请前往云安全中心控制台",
        position: "前端工程师",
      },
    ],
  };

  return res.json({ msg: "success", data: result });
};
exports.getProjectList = async (req, res) => {
  let result = [];
  result = [
    {
      projecName: "弼马温",
      projectIcon: "http://dummyimage.com/100x100",
      projectTypes: "personal page,vue3,resume",
      projectImage: "https://w.wallhaven.cc/full/l3/wallhaven-l3xk6q.jpg",
      createTime: "1982-04-01 01:31:53",
      projectDesc:
        "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
      projectTitle: "我的牛逼",
      developers: [
        {
          developersName: "log1997",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/26322485?v=4",
          developersGithub: "https://github.com/log1997",
        },
        {
          developersName: "potabal",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/113995582?v=4",
          developersGithub: "https://github.com/potabal",
        },
        {
          developersName: "PigMissRain",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/55303605?v=4",
          developersGithub: "https://github.com/PigMissRain",
        },
      ],
      themeColor: "#004DB5",
      currentStatus: "开发中",
      projectLink: "https://24years.top",
      githubPackages: [
        {
          packageName: "Vue",
          packageVersion: "3.2.6",
        },
        {
          packageName: "vite",
          packageVersion: "3.1.6",
        },
        {
          packageName: "sass",
          packageVersion: "8.0.0",
        },
        {
          packageName: "element-plus",
          packageVersion: "2.2.8",
        },
      ],
      githubProjectName: "vue3-demo",
    },
    {
      projecName: "猪八戒",
      projectIcon: "http://dummyimage.com/100x100",
      projectTypes: "persage,vue3,resume,go",
      projectImage: "https://w.wallhaven.cc/full/6d/wallhaven-6doldq.jpg",
      createTime: "1999-04-01 01:31:53",
      projectDesc:
        "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
      projectTitle: "假的牛逼",
      developers: [
        {
          developersName: "log1997",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/26322485?v=4",
          developersGithub: "https://github.com/log1997",
        },
        {
          developersName: "potabal",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/113995582?v=4",
          developersGithub: "https://github.com/potabal",
        },
        {
          developersName: "PigMissRain",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/55303605?v=4",
          developersGithub: "https://github.com/PigMissRain",
        },
      ],
      themeColor: "#687FA5",
      currentStatus: "开发中",
      projectLink: "https://24years.top",
      githubPackages: [
        {
          packageName: "Vue",
          packageVersion: "3.2.6",
        },
        {
          packageName: "vite",
          packageVersion: "3.1.6",
        },
        {
          packageName: "sass",
          packageVersion: "8.0.0",
        },
        {
          packageName: "element-plus",
          packageVersion: "2.2.8",
        },
      ],
      githubProjectName: "vue3-demo",
    },
    {
      projecName: "华山",
      projectIcon: "http://dummyimage.com/100x100",
      projectTypes: "personal page,vue3,resume",
      projectImage: "https://w.wallhaven.cc/full/x6/wallhaven-x68klv.jpg",
      createTime: "2022-04-01 01:31:53",
      projectDesc:
        "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
      projectTitle: "哈的牛逼",
      developers: [
        {
          developersName: "log1997",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/26322485?v=4",
          developersGithub: "https://github.com/log1997",
        },
        {
          developersName: "potabal",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/113995582?v=4",
          developersGithub: "https://github.com/potabal",
        },
        {
          developersName: "PigMissRain",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/55303605?v=4",
          developersGithub: "https://github.com/PigMissRain",
        },
      ],
      themeColor: "#C4C3CB",
      currentStatus: "已发布",
      projectLink: "https://24years.top",
      githubPackages: [
        {
          packageName: "Vue",
          packageVersion: "3.2.6",
        },
        {
          packageName: "vite",
          packageVersion: "3.1.6",
        },
        {
          packageName: "sass",
          packageVersion: "8.0.0",
        },
        {
          packageName: "element-plus",
          packageVersion: "2.2.8",
        },
      ],
      githubProjectName: "vue3-demo",
    },
    {
      projecName: "玉儿",
      projectIcon: "http://dummyimage.com/100x100",
      projectTypes: "personal page,vue3,resume",
      projectImage: "https://w.wallhaven.cc/full/1p/wallhaven-1pkoew.jpg",
      createTime: "1917-04-01 01:31:53",
      projectDesc:
        "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
      projectTitle: "无的牛逼",
      developers: [
        {
          developersName: "log1997",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/26322485?v=4",
          developersGithub: "https://github.com/log1997",
        },
        {
          developersName: "potabal",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/113995582?v=4",
          developersGithub: "https://github.com/potabal",
        },
        {
          developersName: "PigMissRain",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/55303605?v=4",
          developersGithub: "https://github.com/PigMissRain",
        },
      ],
      themeColor: "#8C90B9",
      currentStatus: "开发中",
      projectLink: "https://24years.top",
      githubPackages: [
        {
          packageName: "Vue",
          packageVersion: "3.2.6",
        },
        {
          packageName: "vite",
          packageVersion: "3.1.6",
        },
        {
          packageName: "sass",
          packageVersion: "8.0.0",
        },
        {
          packageName: "element-plus",
          packageVersion: "2.2.8",
        },
      ],
      githubProjectName: "vue3-demo",
    },
    {
      projecName: "天得力",
      projectIcon: "http://dummyimage.com/100x100",
      projectTypes: "personal page,vue3,resume",
      projectImage: "https://w.wallhaven.cc/full/x6/wallhaven-x68dpz.jpg",
      createTime: "1982-04-01 01:31:53",
      projectDesc:
        "Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。",
      projectTitle: "真的牛逼",
      developers: [
        {
          developersName: "log1997",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/26322485?v=4",
          developersGithub: "https://github.com/log1997",
        },
        {
          developersName: "potabal",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/113995582?v=4",
          developersGithub: "https://github.com/potabal",
        },
        {
          developersName: "PigMissRain",
          developersAvatar:
            "https://avatars.githubusercontent.com/u/55303605?v=4",
          developersGithub: "https://github.com/PigMissRain",
        },
      ],
      themeColor: "#F5CEBE",
      currentStatus: "已发布",
      projectLink: "https://24years.top",
      githubPackages: [
        {
          packageName: "Vue",
          packageVersion: "3.2.6",
        },
        {
          packageName: "vite",
          packageVersion: "3.1.6",
        },
        {
          packageName: "sass",
          packageVersion: "8.0.0",
        },
        {
          packageName: "element-plus",
          packageVersion: "2.2.8",
        },
      ],
      githubProjectName: "vue3-demo",
    },
  ];
  return res.json({ msg: "success", data: result });
};
