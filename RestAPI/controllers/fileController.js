const uploadFile = require('../utils/upload');
const fs = require('fs');
const { User } = require('../models');

const upload = async(req, res) => {
    try {
        await uploadFile(req, res);

        //console.log(req.user._id);
        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
        });
        User.findOneAndUpdate({ _id: req.user._id }, { avatar: req.file.originalname });
    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            return res.status(500).send({
                message: "File size cannot be larger than 2MB!",
            });
        }
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${err}`,
        });
    }
};
const getListFiles = (req, res) => {
    const directoryPath = __dirname.slice(0, 32) + "/static/assets/uploads/";
    fs.readdir(directoryPath, function(err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }
        let fileInfos = [];
        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: __dirname.slice(0, 32) + "/static/assets/uploads/" + file,
            });
        });
        res.status(200).send(fileInfos);
    });
};
const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __dirname.slice(0, 32) + "/static/assets/uploads/";
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};

const getAvatar = (req, res) => {
    console.log(req.params.avatar);
    const fileName = req.params.avatar;
    const path = "http://localhost:9999/files/";
    console.log(path + fileName);
    // const directoryPath = __dirname.slice(0, 32) + "/static/assets/uploads/";
    res.sendFile(path + fileName, fileName, (err) => {

        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};
module.exports = {
    upload,
    getListFiles,
    download,
    getAvatar
};