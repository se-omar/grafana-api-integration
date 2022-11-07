import React, { useState } from "react";

const GetDashboards = () => {
    const [folderSuccess, setFolderSuccess] = useState(false);
    const [dashboardSuccess, setDashboardSuccess] = useState(false);
    const [folders, setFolders] = useState([]);
    const apiKey =
        "Bearer eyJrIjoiMW1IbjQ0ejJrN2phZHc0OFJtQlpGU0w0aTNPVDVNTzQiLCJuIjoidGVzdC1rZXkyIiwiaWQiOjF9";

    const getFolders = async () => {
        try {
            const response = await fetch("http://localhost/api/folders", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Authorization: apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("result is: ", JSON.stringify(result, null, 4));
            setFolders(result);
            setFolderSuccess(true);
            // this.setState({ folders: result, folderSuccess: true });
        } catch (err) {
            console.log(err);
        }
    };

    const getDashboards = async () => {
        let newFolders = [];
        try {
            if (folders == []) {
                return null;
            }

            var bar = new Promise((resolve, reject) => {
                foo.forEach((value, index, array) => {
                    console.log(value);
                    if (index === array.length - 1) resolve();
                });
            });

            folders.forEach(async (folder) => {
                const response = await fetch(`http://localhost/api/search?folderIds=${folder.id}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: apiKey,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }

                const result = await response.json();
                // this.state.dashboardSuccess = true;

                folder.dashboards = result;
                newFolders.push(folder);
                console.log("new folders: ", newFolders);
                // setFolders((folders) => [...folders, ...result]);
                // console.log("result is: ", JSON.stringify(result, null, 4));
            });
            console.log("newfolders is: ", newFolders);
            console.log("folders is: ", folders);
            setDashboardSuccess(true);
            console.log(dashboardSuccess);
            // setFolders(newFolders);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button onClick={getFolders}>Get Folders</button>
            {folderSuccess && !dashboardSuccess && (
                <div>
                    {folders.map((folder) => (
                        <ul>
                            <li>
                                <div>{folder.title}</div>
                            </li>
                        </ul>
                    ))}
                </div>
            )}
            <br />
            {folderSuccess && <button onClick={getDashboards}>Get Dashboards</button>}
            {folderSuccess && dashboardSuccess && (
                <div>
                    {folders.map((folder) => (
                        <ul>
                            <li>
                                <div>
                                    {folder.title}
                                    {console.log(folder)}
                                    {/* {folder.dashboards.map((db) => (
                                        <ul>
                                            <li>{db.title}</li>
                                        </ul>
                                    ))} */}
                                </div>
                            </li>
                        </ul>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GetDashboards;
