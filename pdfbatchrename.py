import wx
import os
import pandas as pd
import shutil


class MyFrame(wx.Frame):

    # Constructor
    def __init__(self):
        wx.Frame.__init__(self, None, title = "PDF Batch Rename", size = (300,200))
        panel = wx.Panel(self)

        wx.StaticText(panel, label = "PDF Batch Rename", pos = (100, 30))
        btn = wx.Button(panel, label = "Start!", pos = (100, 100))

        # Call onClicked when button pressed
        btn.Bind(wx.EVT_BUTTON, self.onClicked)


    def onClicked(self, event):

        # Get folder containing files
        dlg = wx.DirDialog(None, "Choose directory containing files to rename", "", wx.DD_DEFAULT_STYLE | wx.DD_DIR_MUST_EXIST)
        dlg.ShowModal()
        folder_path = dlg.GetPath()

        # Select mapping file
        mapping = wx.FileDialog(None, "Choose mapping file", "", style = wx.FD_OPEN | wx.FD_FILE_MUST_EXIST)
        mapping.ShowModal()
        file_path = mapping.GetPath()

        # Get statement ending date
        end_date = self.ask()

        # Rename files
        self.getName(folder_path, file_path, end_date)

        self.Close()
        return

    def ask(parent=None, message='Enter ending date (e.g. mmddyy) ', value=''):
        dlg = wx.TextEntryDialog(parent, message, value=value)
        dlg.ShowModal()
        result = dlg.GetValue()
        return result

    def getName(self, folder_path, file_path,end_date):
        folder_path = folder_path.replace('\\','\\\\')
        folder_path = str(folder_path)

        # Get all files in folder
        files = os.listdir(folder_path)

        # Read mapping file
        df1 = pd.read_csv(file_path, skipinitialspace=True)

        for f in files:
            temp = f.split("_")
            for index, row in df1.iterrows():

                # If first part of filename matches column B AND if second part of filename matches column C
                if (str(temp[0]) == str(row[1])) and (str(temp[1].lstrip("0")) == str(row[2])):

                    # Get newName from column D
                    newName = folder_path + "\\\\" + row[3]
                    newName = newName.replace('\\\\','\\')

                    full_path = folder_path + "\\\\" + f
                    full_path = full_path.replace('\\\\','\\')

                    # Rename file
                    try:
                        shutil.move(full_path, newName)
                    except:
                        pass

        # Append end date and .pdf filetype
        files = os.listdir(folder_path)
        for f in files:
            full_path = folder_path + "\\\\" + f
            full_path = full_path.replace('\\\\','\\')
            name2 = full_path + "_" + end_date + ".pdf"
            shutil.move(full_path, name2)
        return


# Run script
app = wx.App()
frame = MyFrame()
frame.Show()
app.MainLoop()
