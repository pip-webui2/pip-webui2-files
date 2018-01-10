
# <img src="https://github.com/pip-webui2/pip-webui2/raw/master/doc/Logo.png" alt="Pip.WebUI Logo" style="max-width:30%"> <br/> Files

![](https://img.shields.io/badge/license-MIT-blue.svg)

Pip.WebUI.Files module provides controls to select files on local disk and upload them to server using form multi-part protocol. 

### File upload service

**Serves to upload files using form multi-part protocol**

**Using**

```typescript
import { PipFileUploadService } from 'pip-webui2-files';

fileUploadService.uploadFiles(url, fileCollection, headers).subscribe(result => {
    // Results are here...
});

```

## Installation

To install this module using npm:

```bash
npm install pip-webui2-files --save
```

## <a name="license"></a>License

This module is released under [MIT license](License) and totally free for commercial and non-commercial use.