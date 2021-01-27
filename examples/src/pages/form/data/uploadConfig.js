import { Message } from 'element-ui'
import request from '@/utils/request'

export const fields = {
  filePath: {
    label: '上传文件',
    elTag: 'el-upload',
    elSlots: {
      default: 'upload'
    },
    elClass: 'upload-wrap',
    elAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      beforeUpload(file) {
        // return false
      },
      onChange(file, fileList) {
        // console.log(file, fileList)
      },
      onSuccess(response, file, fileList, { done }) {
        done('filePath')
      },
      onError(err, file, fileList) {
        Message.error(err.message)
      },
      onProgress(event, file, fileList) {
        event.percent = parseInt(Math.round((event.loaded / event.total) * 100))
      },
      httpRequest({ action, data, file, filename, headers, onError, onProgress, onSuccess, withCredentials }) {
        let formData = new FormData()
        formData.append('file', file)

        request({
          url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          method: 'post',
          data: formData,
          onUploadProgress(progressEvent) {
            onProgress(progressEvent)
          }
        })
          .then(response => {
            onSuccess(response)
          })
          .catch(err => {
            onError(err)
          })
      }
    },
    rules: [{ required: true }]
  }
}
