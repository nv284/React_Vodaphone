let passexam = true;
        let res = new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (passexam) {
                    resolve("Dad gifted the new mobile.");
                } else {
                    reject("Dad has not gifted the mobile.");
                }
            }, 5 * 1000);
        });
        console.log(res);