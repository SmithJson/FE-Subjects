(function (global) {
    const MAX_SIZE = 4 * 1024 * 1024; // 4MB 文件最大值
    const MIN_SIZE = 1024; // 1KB 文件最小值
    const MAX_FILE_SIZE = `${MAX_SIZE / 1024}KB`;
    const MIN_FILE_SIZE = `${MIN_SIZE / 1024}KB`;
    let fileData = []; // 上传的文件数据
    const fileType = /(jpe?g|svg|png|gif|webp)/i; // 允许上传图片类型
    const uploadInput = document.querySelector('#upload-input');
    const dragUpload = document.querySelector('.drag-upload');
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

    // 文件上传处理函数
    function fileUpload(files) {
        for (let file of files) {
            const {
                name,
                size,
                type,
            } = file;

            if (!fileType.test(type)) { // 文件类型检测
                console.log(`${name} 文件类型不合法`);
                continue;
            }

            if (size > MAX_SIZE) { // 文件大小检测
                console.log(`文件最大为${MAX_FILE_SIZE}`);
                continue;
            } else if (size < MIN_SIZE) {
                console.log(`文件最小为${MIN_FILE_SIZE}`);
                continue;
            }

            fileTypeTranslate(file).then(result => {
                if (fileData.includes(result)) {
                    console.log(`${name} 已存在`);
                } else {
                    fileData.push(result);

                    const tpl = document.querySelector('.item.tpl').cloneNode(true);

                    tpl.children[0].src = result;
                    tpl.dataset.src = `${result}`;
                    tpl.classList.remove('tpl');
                    showContainer.appendChild(tpl);
                }
            });
        }
    }

    dragUpload.addEventListener('dragover', function (e) {
        // 使 drop 事件生效
        e.preventDefault();
    }, false);

    dragUpload.addEventListener('drop', function (e) {
        // 避免本地文件直接以网页形式显示
        e.preventDefault();
        const { dataTransfer } = e;
        const { files } = dataTransfer;

        fileUpload(files);
    }, false);

    uploadInput.addEventListener('change', function (e) {
        const { files } = e.target;

        fileUpload(files);
    }, false);

    showContainer.addEventListener('click', function (e) {
        const { classList, parentElement } = e.target;

        if (classList.contains('close')) {
            const { dataset } = parentElement;

            fileData = fileData.filter(item => item !== dataset.src);
            this.removeChild(parentElement);
        }
    }, false);

})(window);