(function (global) {
    const MAX_SIZE = 4 * 1024 * 1024; // 4MB 文件最大值
    const MIN_SIZE = 1024; // 1KB 文件最小值
    const MAX_FILE_SIZE = `${MAX_SIZE / 1024}KB`;
    const MIN_FILE_SIZE = `${MIN_SIZE / 1024}KB`;
    const fileData = []; // 上传的文件数据
    const fileType = /(jpe?g|svg|png|gif|webp)/i; // 允许上传图片类型
    const uploadInput = document.querySelector('#upload-input');
    const showContainer = document.querySelector('.show-container');

    // 文件转换
    function fileTypeTranslate(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    }

    /**
     * TODO:
     * 1. 点击文件上传框 √
     * 2. 获取到 input file 的数据 √
     * 3. 数据校验 √
     * 4. 处理数据转换为 base64 格式 √
     * 5. 保存到 fileData 变量中 √
     * 6. 点击上传按钮，数据上传
     */
    uploadInput.onchange = function (e) {
        const {files} = e.target;

        for (let file of files) {
            const {
                name,
                size,
                type,
            } = file;

            if (!fileType.test(type)) { // 文件类型检测
                console.log(`${name} 文件类型不合法`);
                return;
            }

            if (size > MAX_SIZE) { // 文件大小检测
                console.log(`文件最大为${MAX_FILE_SIZE}`);
                return;
            } else if (size < MIN_SIZE) {
                console.log(`文件最小为${MIN_FILE_SIZE}`);
                return;
            }

            fileTypeTranslate(file).then(result => {
                if (fileData.includes(result)) {
                    console.log(`${name} 已存在`);
                    return;
                }

                fileData.push(result);

                const tpl = document.querySelector('.item.tpl').cloneNode(true);

                tpl.children[0].src = result;
                tpl.classList.remove('tpl');
                showContainer.appendChild(tpl);
                console.log(fileData);
            });
        }
    };

})(window);