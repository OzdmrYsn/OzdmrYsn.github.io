 // --- DOM Elementleri ---
        const authScreen = document.getElementById('authScreen');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const loginUsernameInput = document.getElementById('loginUsername');
        const loginPasswordInput = document.getElementById('loginPassword');
        const loginButton = document.getElementById('loginButton');
        const showRegisterFormButton = document.getElementById('showRegisterFormButton');
        
        const registerFullNameInput = document.getElementById('registerFullName'); 
        const registerUsernameInput = document.getElementById('registerUsername');
        const registerPasswordInput = document.getElementById('registerPassword');
        const registerPasswordConfirmInput = document.getElementById('registerPasswordConfirm');
        const registerButton = document.getElementById('registerButton');
        const showLoginFormButton = document.getElementById('showLoginFormButton');

        const appScreen = document.getElementById('appScreen');
        const sidebar = document.getElementById('sidebar');
        const sidebarBoardsContainer = document.getElementById('sidebarBoardsContainer');
        const newBoardNameSidebarInput = document.getElementById('newBoardNameSidebar');
        const addBoardButtonSidebar = document.getElementById('addBoardButtonSidebar');
        
        const mainAppContent = document.getElementById('mainAppContent');
        const currentBoardNameHeader = document.getElementById('currentBoardNameHeader');
        const cardSearchInput = document.getElementById('cardSearchInput'); 
        const toggleArchivedViewButton = document.getElementById('toggleArchivedViewButton'); 
        const themeToggleButton = document.getElementById('themeToggle'); 
        const profileArea = document.getElementById('profileArea');
        const profileImage = document.getElementById('profileImage');
        const currentUserDisplay = document.getElementById('currentUserDisplay');
        const logoutButton = document.getElementById('logoutButton');
        
        const selectedBoardArea = document.getElementById('selectedBoardArea');

        const newColumnNameInput = document.getElementById('newColumnName');
        const addColumnButton = document.getElementById('addColumnButton');
        const columnsContainer = document.getElementById('columnsContainer');
        const archivedCardsContainer = document.getElementById('archivedCardsContainer'); 

        const cardModal = document.getElementById('cardModal');
        const closeCardModalButton = document.getElementById('closeCardModal');
        const modalCardTitleInput = document.getElementById('modalCardTitleInput');
        const modalCardIdInput = document.getElementById('modalCardId');
        const modalColumnIdInput = document.getElementById('modalColumnId');
        const modalCardDescriptionInput = document.getElementById('modalCardDescription');
        const modalCardImageUrlInput = document.getElementById('modalCardImageUrl');
        const modalCardAssigneesContainer = document.getElementById('modalCardAssigneesContainer');
        const modalCardDueDateInput = document.getElementById('modalCardDueDate');
        const modalCardPrioritySelect = document.getElementById('modalCardPriority'); 
        const subtaskListContainer = document.getElementById('subtaskListContainer'); 
        const newSubtaskTextInput = document.getElementById('newSubtaskText'); 
        const addSubtaskButton = document.getElementById('addSubtaskButton'); 
        const subtaskProgressDisplay = document.getElementById('subtaskProgress'); 
        
        const modalCardActivityLogContainer = document.getElementById('modalCardActivityLogContainer'); // NEW

        const modalCardCommentsContainer = document.getElementById('modalCardCommentsContainer');
        const newCommentTextInput = document.getElementById('newCommentText');
        const addCommentButton = document.getElementById('addCommentButton');
        const existingLabelsContainer = document.getElementById('existingLabelsContainer');
        const newLabelNameInput = document.getElementById('newLabelName');
        const newLabelColorSelector = document.getElementById('newLabelColorSelector');
        const addNewLabelButton = document.getElementById('addNewLabelButton');
        const archiveCardButton = document.getElementById('archiveCardButton'); 
        const deleteCardButton = document.getElementById('deleteCardButton');

        const profileModal = document.getElementById('profileModal');
        const closeProfileModalButton = document.getElementById('closeProfileModal');
        const profileFullNameInput = document.getElementById('profileFullNameInput'); 
        const profileModalImagePreview = document.getElementById('profileModalImagePreview');
        const profileImageUrlInput = document.getElementById('profileImageUrlInput');
        const saveProfileButton = document.getElementById('saveProfileButton');

        const renameBoardModal = document.getElementById('renameBoardModal');
        const closeRenameBoardModalButton = document.getElementById('closeRenameBoardModal');
        const renamingBoardIdInput = document.getElementById('renamingBoardId');
        const renameBoardNameInput = document.getElementById('renameBoardNameInput');
        const saveRenamedBoardButton = document.getElementById('saveRenamedBoardButton');

        const renameColumnModal = document.getElementById('renameColumnModal'); // NEW
        const closeRenameColumnModalButton = document.getElementById('closeRenameColumnModal'); // NEW
        const renamingColumnIdInput = document.getElementById('renamingColumnId'); // NEW
        const renameColumnNameInput = document.getElementById('renameColumnNameInput'); // NEW
        const saveRenamedColumnButton = document.getElementById('saveRenamedColumnButton'); // NEW

        const confirmationModal = document.getElementById('confirmationModal');
        const confirmationModalTitle = document.getElementById('confirmationModalTitle');
        const confirmationModalMessage = document.getElementById('confirmationModalMessage');
        const confirmYesButton = document.getElementById('confirmYesButton');
        const confirmNoButton = document.getElementById('confirmNoButton');
        let currentConfirmAction = null;

        const boardMembersModal = document.getElementById('boardMembersModal'); 
        const closeBoardMembersModalButton = document.getElementById('closeBoardMembersModal'); 
        const manageMembersBoardIdInput = document.getElementById('manageMembersBoardId'); 
        const boardMembersListContainer = document.getElementById('boardMembersListContainer'); 
        const saveBoardMembersButton = document.getElementById('saveBoardMembersButton'); 

        const editLabelModal = document.getElementById('editLabelModal'); 
        const closeEditLabelModalButton = document.getElementById('closeEditLabelModal'); 
        const editingLabelIdInput = document.getElementById('editingLabelId'); 
        const editLabelNameInput = document.getElementById('editLabelNameInput'); 
        const editLabelColorSelector = document.getElementById('editLabelColorSelector'); 
        const saveEditLabelButton = document.getElementById('saveEditLabelButton'); 


        // --- Veri Yapıları ve localStorage Anahtarları ---
        const LS_USERS_KEY = 'trelloCloneUsers_v11_features'; // Updated key
        const LS_BOARDS_KEY = 'trelloCloneBoards_v11_features';
        const LS_LABELS_KEY = 'trelloCloneLabels_v11_features';
        const LS_CURRENT_USER_KEY = 'trelloCloneCurrentUser_v11_features';
        const LS_LAST_SELECTED_BOARD_ID = 'trelloCloneLastSelectedBoardId_v11_features';
        const LS_THEME_KEY = 'trelloCloneTheme_v11_features'; 


        let users = JSON.parse(localStorage.getItem(LS_USERS_KEY)) || [];
        let boards = JSON.parse(localStorage.getItem(LS_BOARDS_KEY)) || [];
        let availableLabels = JSON.parse(localStorage.getItem(LS_LABELS_KEY)) || [];
        let currentUser = localStorage.getItem(LS_CURRENT_USER_KEY) || null;
        let currentBoardId = null;
        let currentTheme = localStorage.getItem(LS_THEME_KEY) || 'light-theme'; 
        let showingArchived = false; 

        const PREDEFINED_LABEL_COLORS = [
            { name: 'Yeşil', value: '#61bd4f' }, { name: 'Sarı', value: '#f2d600' },
            { name: 'Turuncu', value: '#ff9f1a' }, { name: 'Kırmızı', value: '#eb5a46' },
            { name: 'Mor', value: '#c377e0' }, { name: 'Mavi', value: '#0079bf' },
            { name: 'Turkuaz', value: '#00c2e0' }, { name: 'Pembe', value: '#ff78cb' },
            { name: 'Siyah', value: '#344563' }, { name: 'Gri', value: '#838c91' }
        ];
        let selectedNewLabelColor = PREDEFINED_LABEL_COLORS[0].value;
        let selectedEditLabelColor = PREDEFINED_LABEL_COLORS[0].value; 

        const PRIORITY_LEVELS = {
            low: 'Düşük',
            normal: 'Normal',
            high: 'Yüksek',
            urgent: 'Acil'
        };
        const PRIORITY_COLORS_BG = { 
            low: 'bg-green-500',
            normal: 'bg-blue-500',
            high: 'bg-orange-500', 
            urgent: 'bg-red-500'
        };


        // --- Yardımcı Fonksiyonlar ---
        function getNextId() {
            return `id-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        }

        function saveData() {
            localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
            localStorage.setItem(LS_BOARDS_KEY, JSON.stringify(boards));
            localStorage.setItem(LS_LABELS_KEY, JSON.stringify(availableLabels));
            if (currentUser) {
                localStorage.setItem(LS_CURRENT_USER_KEY, currentUser);
            } else {
                localStorage.removeItem(LS_CURRENT_USER_KEY);
            }
            localStorage.setItem(LS_THEME_KEY, currentTheme); 
        }
        
        function showNotification(message, type = 'info') {
            const notificationArea = document.getElementById('notificationArea');
            const notification = document.createElement('div');
            let bgColor = 'bg-blue-500';
            if (type === 'success') bgColor = 'bg-green-500';
            if (type === 'error') bgColor = 'bg-red-500';
            
            notification.className = `notification ${bgColor} text-white transform transition-all duration-300 ease-out opacity-0 translate-x-full`;
            notification.textContent = message;
            notificationArea.appendChild(notification);

            requestAnimationFrame(() => {
                notification.classList.remove('opacity-0', 'translate-x-full');
                notification.classList.add('opacity-100', 'translate-x-0');
            });

            setTimeout(() => {
                notification.classList.remove('opacity-100', 'translate-x-0');
                notification.classList.add('opacity-0', 'translate-x-full');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // --- Onay Modalı İşlevleri ---
        function showConfirmationModal(title, message, onConfirm) {
            confirmationModalTitle.textContent = title;
            confirmationModalMessage.textContent = message;
            currentConfirmAction = onConfirm;
            confirmationModal.style.display = 'flex'; 
        }

        confirmYesButton.addEventListener('click', () => {
            if (currentConfirmAction) {
                currentConfirmAction();
            }
            confirmationModal.style.display = 'none';
            currentConfirmAction = null;
        });

        confirmNoButton.addEventListener('click', () => {
            confirmationModal.style.display = 'none';
            currentConfirmAction = null;
        });


        // --- Tema İşlemleri ---
        function applyTheme(theme) {
            document.body.className = theme; 
            themeToggleButton.innerHTML = theme === 'dark-theme' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            currentTheme = theme;
            saveData();
        }

        themeToggleButton.addEventListener('click', () => {
            const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
            applyTheme(newTheme);
        });


        // --- Kimlik Doğrulama ve Profil ---
        profileArea.addEventListener('click', () => {
            const user = users.find(u => u.username === currentUser);
            if(user) {
                profileFullNameInput.value = user.fullName || ''; 
                profileImageUrlInput.value = user.profileImageUrl || '';
                profileModalImagePreview.src = user.profileImageUrl || `https://placehold.co/100x100/dfe1e6/172b4d?text=${(user.fullName || currentUser).substring(0,1).toUpperCase()}`;
            }
            profileModal.style.display = 'block';
        });

        closeProfileModalButton.addEventListener('click', () => {
            profileModal.style.display = 'none';
        });

        saveProfileButton.addEventListener('click', () => {
            const user = users.find(u => u.username === currentUser);
            if(user) {
                user.fullName = profileFullNameInput.value.trim(); 
                user.profileImageUrl = profileImageUrlInput.value.trim();
                saveData();
                updateProfileDisplay();
                renderColumns(cardSearchInput.value); 
                showNotification('Profil güncellendi.', 'success');
                profileModal.style.display = 'none';
            }
        });

        function updateProfileDisplay() {
            const user = users.find(u => u.username === currentUser);
            if (user) {
                currentUserDisplay.textContent = user.fullName || `Hoş geldin, ${currentUser}!`; 
                if (user.profileImageUrl) {
                    profileImage.src = user.profileImageUrl;
                    profileImage.alt = user.fullName || currentUser;
                } else {
                    profileImage.src = `https://placehold.co/32x32/dfe1e6/172b4d?text=${(user.fullName || currentUser).substring(0,1).toUpperCase()}`;
                    profileImage.alt = user.fullName || currentUser;
                }
            } else { 
                profileImage.src = 'https://placehold.co/32x32/dfe1e6/172b4d?text=P';
                profileImage.alt = 'Profil';
                currentUserDisplay.textContent = `Hoş geldin!`;
            }
        }


        showRegisterFormButton.addEventListener('click', () => {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });
        showLoginFormButton.addEventListener('click', () => {
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });

        function handleAuthEnter(event, buttonToClick) {
            if (event.key === 'Enter') {
                event.preventDefault();
                buttonToClick.click();
            }
        }
        loginUsernameInput.addEventListener('keypress', (e) => handleAuthEnter(e, loginButton));
        loginPasswordInput.addEventListener('keypress', (e) => handleAuthEnter(e, loginButton));
        registerFullNameInput.addEventListener('keypress', (e) => handleAuthEnter(e, registerButton)); 
        registerUsernameInput.addEventListener('keypress', (e) => handleAuthEnter(e, registerButton));
        registerPasswordInput.addEventListener('keypress', (e) => handleAuthEnter(e, registerButton));
        registerPasswordConfirmInput.addEventListener('keypress', (e) => handleAuthEnter(e, registerButton));


        registerButton.addEventListener('click', () => {
            const fullName = registerFullNameInput.value.trim(); 
            const username = registerUsernameInput.value.trim();
            const password = registerPasswordInput.value;
            const passwordConfirm = registerPasswordConfirmInput.value;

            if (!fullName || !username || !password || !passwordConfirm) return showNotification('Tüm alanlar doldurulmalıdır.', 'error'); 
            if (password !== passwordConfirm) return showNotification('Şifreler eşleşmiyor.', 'error');
            if (users.find(u => u.username.toLowerCase() === username.toLowerCase())) return showNotification('Bu kullanıcı adı zaten mevcut.', 'error');
            
            users.push({ fullName, username, password, profileImageUrl: '' }); 
            saveData();
            showNotification('Kayıt başarılı! Şimdi giriş yapabilirsiniz.', 'success');
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            registerFullNameInput.value = '';
            registerUsernameInput.value = '';
            registerPasswordInput.value = '';
            registerPasswordConfirmInput.value = '';
        });

        loginButton.addEventListener('click', () => {
            const username = loginUsernameInput.value.trim();
            const password = loginPasswordInput.value;
            const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
            
            if (user) {
                currentUser = user.username;
                saveData(); 
                applyTheme(localStorage.getItem(LS_THEME_KEY) || 'light-theme'); 
                authScreen.classList.add('hidden');
                appScreen.style.display = 'flex';
                updateProfileDisplay(); 
                renderSidebarBoards();
                currentBoardNameHeader.textContent = "Pano Seçin";
                selectedBoardArea.classList.add('hidden');
                 cardSearchInput.classList.add('hidden'); 
                 toggleArchivedViewButton.classList.add('hidden'); 
            } else {
                showNotification('Geçersiz kullanıcı adı veya şifre.', 'error');
            }
        });

        logoutButton.addEventListener('click', () => {
            currentUser = null;
            currentBoardId = null;
            localStorage.removeItem(LS_LAST_SELECTED_BOARD_ID); 
            saveData(); 
            authScreen.classList.remove('hidden');
            appScreen.style.display = 'none';
            selectedBoardArea.classList.add('hidden');
            loginUsernameInput.value = '';
            loginPasswordInput.value = '';
        });

        newBoardNameSidebarInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                addBoardButtonSidebar.click();
            }
        });

        newColumnNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addColumnButton.click();
            }
        });
        
        addBoardButtonSidebar.addEventListener('click', () => {
            const boardName = newBoardNameSidebarInput.value.trim();
            if (boardName) {
                const newBoardData = { 
                    id: getNextId(), 
                    name: boardName, 
                    columns: [], 
                    owner: currentUser, 
                    members: [currentUser], 
                    backgroundColor: ''
                    // Board-level activity log removed as per new requirement
                };
                boards.push(newBoardData); 
                // Log board creation if needed (e.g., a global system log, not displayed per board)
                newBoardNameSidebarInput.value = '';
                saveData();
                renderSidebarBoards();
                showNotification(`"${boardName}" panosu eklendi.`, 'success');
            } else {
                showNotification('Pano adı boş bırakılamaz.', 'error');
            }
        });

        function renderSidebarBoards() {
            sidebarBoardsContainer.innerHTML = '';
            const userVisibleBoards = boards; 
            
            userVisibleBoards.forEach(board => {
                const wrapper = document.createElement('div');
                wrapper.className = 'sidebar-board-item-wrapper relative'; 

                const boardElement = document.createElement('div');
                boardElement.className = 'sidebar-board-item';
                boardElement.textContent = board.name;
                if (board.id === currentBoardId) {
                    boardElement.classList.add('active');
                }
                boardElement.addEventListener('click', () => selectBoard(board.id));
                wrapper.appendChild(boardElement);

                if (board.owner === currentUser) { 
                    const actionsButton = document.createElement('span');
                    actionsButton.className = 'board-actions-button';
                    actionsButton.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
                    
                    const menu = document.createElement('div');
                    menu.className = 'actions-menu board-actions-menu'; 
                    menu.style.right = '10px'; 
                    menu.style.top = '35px'; 

                    const renameButton = document.createElement('button');
                    renameButton.innerHTML = '<i class="fas fa-edit"></i>Yeniden Adlandır';
                    renameButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        menu.style.display = 'none';
                        openRenameBoardModal(board.id, board.name); 
                    });
                    menu.appendChild(renameButton);

                    const manageMembersButton = document.createElement('button'); 
                    manageMembersButton.innerHTML = '<i class="fas fa-users"></i>Üyeleri Yönet';
                    manageMembersButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        menu.style.display = 'none';
                        openBoardMembersModal(board.id);
                    });
                    menu.appendChild(manageMembersButton);

                    const changeBgButton = document.createElement('button'); 
                    changeBgButton.innerHTML = '<i class="fas fa-palette"></i>Arka Planı Değiştir';
                    changeBgButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        menu.style.display = 'none';
                        openChangeBackgroundModal(board.id);
                    });
                    menu.appendChild(changeBgButton);


                    const deleteButton = document.createElement('button');
                    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>Panoyu Sil';
                    deleteButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        menu.style.display = 'none';
                        showConfirmationModal(
                            `"${board.name}" Panosunu Sil`,
                            "Bu panoyu silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
                            () => deleteBoard(board.id)
                        );
                    });
                    menu.appendChild(deleteButton);
                    
                    actionsButton.addEventListener('click', (e) => {
                        e.stopPropagation();
                        document.querySelectorAll('.actions-menu').forEach(m => { if(m !== menu) m.style.display = 'none';});
                        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                    });
                    wrapper.appendChild(actionsButton);
                    wrapper.appendChild(menu);
                }
                sidebarBoardsContainer.appendChild(wrapper);
            });
        }
        
        function openRenameBoardModal(boardIdToRename, oldName) {
            renamingBoardIdInput.value = boardIdToRename;
            renameBoardNameInput.value = oldName;
            renameBoardModal.style.display = 'block';
            renameBoardNameInput.focus();
        }

        closeRenameBoardModalButton.addEventListener('click', () => {
            renameBoardModal.style.display = 'none';
        });

        saveRenamedBoardButton.addEventListener('click', () => {
            const boardIdToRename = renamingBoardIdInput.value;
            const newName = renameBoardNameInput.value.trim();
            
            if (newName && newName !== "") {
                const board = boards.find(b => b.id === boardIdToRename);
                if (board) {
                    // Log board rename if needed (global log or specific board event)
                    board.name = newName;
                    saveData();
                    renderSidebarBoards();
                    if (currentBoardId === boardIdToRename) {
                        currentBoardNameHeader.textContent = board.name;
                    }
                    showNotification('Pano yeniden adlandırıldı.', 'success');
                    renameBoardModal.style.display = 'none';
                }
            } else {
                 showNotification('Pano adı boş bırakılamaz.', 'error');
            }
        });
        renameBoardNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveRenamedBoardButton.click();
            }
        });


        function deleteBoard(boardIdToDelete) {
            boards = boards.filter(b => b.id !== boardIdToDelete);
            if (currentBoardId === boardIdToDelete) {
                currentBoardId = null;
                localStorage.removeItem(LS_LAST_SELECTED_BOARD_ID);
                currentBoardNameHeader.textContent = "Pano Seçin";
                selectedBoardArea.classList.add('hidden');
                cardSearchInput.classList.add('hidden');
                toggleArchivedViewButton.classList.add('hidden');
            }
            saveData();
            renderSidebarBoards();
            showNotification('Pano silindi.', 'success');
        }


        function selectBoard(boardId) {
            currentBoardId = boardId;
            localStorage.setItem(LS_LAST_SELECTED_BOARD_ID, boardId); 
            const board = boards.find(b => b.id === boardId);
            if (board) {
                currentBoardNameHeader.textContent = board.name;
                selectedBoardArea.classList.remove('hidden');
                cardSearchInput.classList.remove('hidden'); 
                cardSearchInput.value = ''; 
                applyBoardBackground(board.backgroundColor); 
                
                toggleArchivedViewButton.classList.remove('hidden');

                showingArchived = false; 
                toggleArchivedViewButton.innerHTML = '<i class="fas fa-archive mr-1"></i> Arşiv';
                toggleArchivedViewButton.classList.remove('active');
                columnsContainer.classList.remove('hidden');
                archivedCardsContainer.classList.add('hidden');
                archivedCardsContainer.innerHTML = ''; 
                
                renderColumns();
                renderSidebarBoards(); 
            } else { 
                currentBoardId = null;
                localStorage.removeItem(LS_LAST_SELECTED_BOARD_ID);
                currentBoardNameHeader.textContent = "Pano Seçin";
                selectedBoardArea.classList.add('hidden');
                cardSearchInput.classList.add('hidden');
                toggleArchivedViewButton.classList.add('hidden');
                applyBoardBackground(''); 
                renderSidebarBoards();
            }
        }
        
        addColumnButton.addEventListener('click', () => {
            if (!currentBoardId) return showNotification('Önce bir pano seçin.', 'error');
            const columnName = newColumnNameInput.value.trim();
            const board = boards.find(b => b.id === currentBoardId);
            if (board && columnName) {
                if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                     return showNotification("Bu panoya kolon ekleme yetkiniz yok.", "error");
                }
                board.columns.push({ id: getNextId(), name: columnName, cards: [] });
                // Log column creation at card level if needed, or board level (removed for now)
                newColumnNameInput.value = '';
                saveData();
                renderColumns();
            } else if (!columnName) {
                showNotification('Kolon adı boş bırakılamaz.', 'error');
            }
        });

        function renderColumns(searchTerm = '') { // Filters removed
            if (showingArchived) {
                renderArchivedCards();
                return;
            }
            columnsContainer.innerHTML = '';
            archivedCardsContainer.classList.add('hidden');
            columnsContainer.classList.remove('hidden');

            const board = boards.find(b => b.id === currentBoardId);
            if (board) {
                board.columns.forEach(column => {
                    const columnElement = document.createElement('div');
                    columnElement.className = 'column relative'; 
                    columnElement.setAttribute('data-column-id', column.id); 

                    columnElement.addEventListener('dragover', handleDragOver);
                    columnElement.addEventListener('dragleave', handleDragLeaveColumn);
                    columnElement.addEventListener('drop', handleDrop);
                    
                    const headerWrapper = document.createElement('div');
                    headerWrapper.className = 'column-header-wrapper';

                    const columnHeaderElement = document.createElement('h4');
                    columnHeaderElement.className = 'column-header';
                    columnHeaderElement.textContent = column.name; 
                    headerWrapper.appendChild(columnHeaderElement); // Ensure header text is part of wrapper

                    if (board.owner === currentUser || (board.members && board.members.includes(currentUser))) {
                        const actionsButton = document.createElement('span');
                        actionsButton.className = 'column-actions-button';
                        actionsButton.innerHTML = '<i class="fas fa-ellipsis-h"></i>'; 
                        
                        const menu = document.createElement('div');
                        menu.className = 'actions-menu column-actions-menu'; 
                        menu.style.right = '5px'; 
                        menu.style.top = '30px';

                        const renameButton = document.createElement('button');
                        renameButton.innerHTML = '<i class="fas fa-edit"></i>Yeniden Adlandır';
                        renameButton.addEventListener('click', (e) => {
                            e.stopPropagation();
                            menu.style.display = 'none';
                            openRenameColumnModal(column.id, column.name); // MODIFIED: Open modal
                        });
                        menu.appendChild(renameButton);

                        const deleteButton = document.createElement('button');
                        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>Kolonu Sil';
                        deleteButton.addEventListener('click', (e) => {
                            e.stopPropagation();
                            menu.style.display = 'none';
                            showConfirmationModal(
                                `"${column.name}" Kolonunu Sil`,
                                "Bu kolonu silmek istediğinizden emin misiniz? İçindeki tüm kartlar da silinecektir.",
                                () => deleteColumn(column.id)
                            );
                        });
                        menu.appendChild(deleteButton);

                        actionsButton.addEventListener('click', (e) => {
                            e.stopPropagation();
                            document.querySelectorAll('.actions-menu').forEach(m => { if(m !== menu) m.style.display = 'none';});
                            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                        });
                        headerWrapper.appendChild(actionsButton); // Add actions to wrapper
                        columnElement.appendChild(menu); // Menu is separate, positioned absolutely
                    }
                    columnElement.appendChild(headerWrapper); // Add wrapper to column


                    const cardsListElement = document.createElement('div');
                    cardsListElement.className = 'cards-list space-y-2 min-h-[40px]'; 
                    
                    let activeCards = column.cards.filter(card => !card.isArchived);
                    
                    if (searchTerm) {
                        activeCards = activeCards.filter(card => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
                    }

                    activeCards.forEach(card => {
                        const cardElement = createCardElement(card, column.id);
                        cardsListElement.appendChild(cardElement);
                    });
                    columnElement.appendChild(cardsListElement);
                    
                    if (board.owner === currentUser || (board.members && board.members.includes(currentUser))) {
                        const addCardInput = document.createElement('input');
                        addCardInput.type = 'text';
                        addCardInput.placeholder = 'Yeni kart başlığı...';
                        addCardInput.className = 'mt-3 p-2 border rounded-md w-full text-sm bg-white dark:bg-gray-800 dark:border-gray-700'; 
                        addCardInput.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                const cardTitle = addCardInput.value.trim();
                                if (cardTitle) {
                                    addCardToColumn(column.id, cardTitle);
                                    addCardInput.value = '';
                                } else {
                                    showNotification('Kart başlığı boş bırakılamaz.', 'error');
                                }
                            }
                        });
                        
                        const addCardButton = document.createElement('button');
                        addCardButton.textContent = '+ Kart Ekle';
                        addCardButton.className = 'btn-secondary w-full mt-1 text-sm py-1.5'; 
                        addCardButton.onclick = () => {
                            const cardTitle = addCardInput.value.trim();
                            if (cardTitle) {
                                addCardToColumn(column.id, cardTitle);
                                addCardInput.value = '';
                            } else {
                                showNotification('Kart başlığı boş bırakılamaz.', 'error');
                            }
                        };
                        
                        columnElement.appendChild(addCardInput);
                        columnElement.appendChild(addCardButton);
                    }
                    columnsContainer.appendChild(columnElement);
                });
            }
        }

        // NEW: Rename Column Modal Functions
        function openRenameColumnModal(columnId, oldName) {
            renamingColumnIdInput.value = columnId;
            renameColumnNameInput.value = oldName;
            renameColumnModal.style.display = 'block';
            renameColumnNameInput.focus();
        }

        closeRenameColumnModalButton.addEventListener('click', () => {
            renameColumnModal.style.display = 'none';
        });

        saveRenamedColumnButton.addEventListener('click', () => {
            const columnIdToRename = renamingColumnIdInput.value;
            const newName = renameColumnNameInput.value.trim();
            const board = boards.find(b => b.id === currentBoardId);

            if (newName && newName !== "") {
                if (board) {
                    const column = board.columns.find(col => col.id === columnIdToRename);
                    if (column) {
                        const oldColumnName = column.name;
                        column.name = newName;
                        // Log column rename at card level if needed, or board level (removed for now)
                        saveData();
                        renderColumns(cardSearchInput.value);
                        showNotification('Kolon yeniden adlandırıldı.', 'success');
                        renameColumnModal.style.display = 'none';
                    }
                }
            } else {
                 showNotification('Kolon adı boş bırakılamaz.', 'error');
            }
        });
        renameColumnNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveRenamedColumnButton.click();
            }
        });


        function deleteColumn(columnIdToDelete) {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                 return showNotification("Bu kolonu silme yetkiniz yok.", "error");
            }
            const columnIndex = board.columns.findIndex(col => col.id === columnIdToDelete);
            if (columnIndex > -1) {
                const columnName = board.columns[columnIndex].name;
                board.columns.splice(columnIndex, 1);
                // Log column deletion at card level if needed, or board level (removed for now)
                saveData();
                renderColumns(cardSearchInput.value);
                showNotification('Kolon silindi.', 'success');
            }
        }
        
        function addCardToColumn(columnId, cardTitle) {
            const board = boards.find(b => b.id === currentBoardId);
            if (board) {
                if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                    return showNotification("Bu panoya kart ekleme yetkiniz yok.", "error");
                }
                const column = board.columns.find(c => c.id === columnId);
                if (column) {
                    const newCard = {
                        id: getNextId(), title: cardTitle, description: '',
                        assignees: [], dueDate: '', labelIds: [], imageUrl: '',
                        priority: 'normal', 
                        isArchived: false,  
                        subtasks: [], 
                        activityLog: [], // NEW: Initialize activity log for new card
                        commentsCount: 0, comments: []
                        // attachmentsCount removed, attachments array removed
                    };
                    column.cards.push(newCard);
                    logActivity(newCard.id, `"${cardTitle}" kartını "${column.name}" kolonuna ekledi.`);
                    saveData();
                    renderColumns(cardSearchInput.value);
                }
            }
        }

        function createCardElement(card, columnId) {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.setAttribute('draggable', true); 
            cardElement.setAttribute('data-card-id', card.id);
            cardElement.setAttribute('data-column-id', columnId);

            cardElement.addEventListener('dragstart', handleDragStart);
            cardElement.addEventListener('dragend', handleDragEnd);

            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'card-content-wrapper';


            if (card.priority) {
                const priorityIndicator = document.createElement('div');
                let bgColorClass = PRIORITY_COLORS_BG[card.priority] || 'bg-gray-300 dark:bg-gray-600';
                priorityIndicator.className = `card-priority-indicator ${bgColorClass}`; 
                priorityIndicator.title = `Öncelik: ${PRIORITY_LEVELS[card.priority] || 'Belirtilmemiş'}`;
                cardElement.appendChild(priorityIndicator); 
            }


            if (card.imageUrl) {
                const img = document.createElement('img');
                img.src = card.imageUrl;
                img.alt = card.title;
                img.className = 'card-cover-image'; 
                contentWrapper.appendChild(img);
            }

            if (card.labelIds && card.labelIds.length > 0) {
                const labelsContainer = document.createElement('div');
                labelsContainer.className = 'card-labels-container'; 
                card.labelIds.forEach(labelId => {
                    const label = availableLabels.find(l => l.id === labelId);
                    if (label) {
                        const labelSpan = document.createElement('span');
                        labelSpan.className = 'card-label';
                        labelSpan.style.backgroundColor = label.color;
                        labelSpan.title = label.name;
                        labelsContainer.appendChild(labelSpan);
                    }
                });
                contentWrapper.appendChild(labelsContainer);
            }

            const cardTitleElement = document.createElement('p');
            cardTitleElement.className = 'card-title'; 
            cardTitleElement.textContent = card.title;
            contentWrapper.appendChild(cardTitleElement);
            
            const metaInfoContainer = document.createElement('div');
            metaInfoContainer.className = 'card-meta-info'; 
            let metaContent = '';
            if (card.dueDate) {
                metaContent += `<span class="card-due-date"><i class="far fa-clock"></i> ${new Date(card.dueDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}</span>`;
            }
            if (card.subtasks && card.subtasks.length > 0) {
                const completedSubtasks = card.subtasks.filter(st => st.completed).length;
                const totalSubtasks = card.subtasks.length;
                const progressPercentage = totalSubtasks > 0 ? (completedSubtasks / totalSubtasks) * 100 : 0;

                let subtaskHTML = `<span class="card-subtasks flex items-center" title="${completedSubtasks}/${totalSubtasks} alt görev tamamlandı">`;
                subtaskHTML += `<i class="far fa-check-square mr-1"></i> ${completedSubtasks}/${totalSubtasks}`;
                subtaskHTML += `<div class="w-10 h-1.5 bg-gray-300 dark:bg-gray-500 rounded-full ml-2 overflow-hidden">`; 
                subtaskHTML += `<div class="h-full bg-blue-500 dark:bg-blue-400 rounded-full" style="width: ${progressPercentage}%;"></div>`;
                subtaskHTML += `</div></span>`;
                metaContent += subtaskHTML;
            }
            metaInfoContainer.innerHTML = metaContent;
            if(metaContent) contentWrapper.appendChild(metaInfoContainer);

            const footer = document.createElement('div');
            footer.className = 'card-footer'; 
            const assigneesDiv = document.createElement('div');
            assigneesDiv.className = 'card-assignees';
            if (card.assignees && card.assignees.length > 0) {
                card.assignees.slice(0, 3).forEach(assigneeName => {
                    const user = users.find(u => u.username.toLowerCase() === assigneeName.toLowerCase());
                    if (user) {
                        const avatar = document.createElement('img'); 
                        avatar.className = 'assignee-avatar';
                        if (user.profileImageUrl) {
                            avatar.src = user.profileImageUrl;
                            avatar.alt = user.fullName || user.username;
                        } else {
                            avatar.src = `https://placehold.co/24x24/dfe1e6/172b4d?text=${(user.fullName || user.username).substring(0,1).toUpperCase()}`;
                            avatar.alt = user.fullName || user.username;
                        }
                        avatar.title = user.fullName || user.username;
                        assigneesDiv.appendChild(avatar);
                    }
                });
                if (card.assignees.length > 3) {
                     const moreAvatar = document.createElement('span');
                        moreAvatar.className = 'assignee-avatar bg-gray-400 text-white';
                        moreAvatar.textContent = `+${card.assignees.length - 3}`;
                        assigneesDiv.appendChild(moreAvatar);
                }
            }
            footer.appendChild(assigneesDiv);

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'card-actions';
            let actionsContent = '';
            if (card.commentsCount > 0) { 
                actionsContent += `<span><i class="far fa-comment-alt"></i> ${card.commentsCount}</span>`;
            }
            // Attachments count removed
            actionsDiv.innerHTML = actionsContent;
            if (assigneesDiv.hasChildNodes() || actionsContent.trim() !== '') {
                 footer.appendChild(actionsDiv); 
                 contentWrapper.appendChild(footer);
            }
            
            cardElement.appendChild(contentWrapper); 

            cardElement.addEventListener('click', (e) => {
                if (e.target.closest('.actions-menu button, .actions-button')) return; 
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' && !e.target.closest('.card')) return;
                openCardModal(card.id, columnId);
            });
            return cardElement;
        }

        let draggedCard = null; 
        let sourceColumnId = null; 

        function handleDragStart(e) {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                e.preventDefault(); 
                showNotification("Bu panodaki kartları taşıma yetkiniz yok.", "error");
                return;
            }
            draggedCard = e.target; 
            sourceColumnId = e.target.dataset.columnId;
            e.dataTransfer.setData('text/plain', e.target.dataset.cardId);
            setTimeout(() => { 
                if(draggedCard) draggedCard.classList.add('dragging');
            }, 0); 
        }

        function handleDragEnd(e) {
            if (draggedCard) { 
                 draggedCard.classList.remove('dragging');
            }
            draggedCard = null;
            sourceColumnId = null;
            document.querySelectorAll('.column.drag-over-column').forEach(col => {
                col.classList.remove('drag-over-column');
            });
        }

        function handleDragOver(e) {
            e.preventDefault(); 
            const currentTargetColumn = e.target.closest('.column');

            if (currentTargetColumn) {
                if (!currentTargetColumn.classList.contains('drag-over-column')) {
                    document.querySelectorAll('.column.drag-over-column').forEach(col => {
                        col.classList.remove('drag-over-column');
                    });
                    currentTargetColumn.classList.add('drag-over-column');
                }
            } else {
                document.querySelectorAll('.column.drag-over-column').forEach(col => {
                    col.classList.remove('drag-over-column');
                });
            }
        }

        function handleDragLeaveColumn(e) {
            if (!e.currentTarget.contains(e.relatedTarget)) {
                 e.currentTarget.classList.remove('drag-over-column');
            }
        }

        function handleDrop(e) {
            e.preventDefault();
            const draggedCardId = e.dataTransfer.getData('text/plain');
            const targetColumnElement = e.target.closest('.column');

            if (!draggedCardId || !targetColumnElement) {
                if (targetColumnElement) targetColumnElement.classList.remove('drag-over-column');
                return;
            }
            
            const targetColumnId = targetColumnElement.dataset.columnId;
            targetColumnElement.classList.remove('drag-over-column'); 

            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu panoya kart taşıma yetkiniz yok.", "error");
            }

            const sourceColData = board.columns.find(col => col.id === sourceColumnId);
            const targetColData = board.columns.find(col => col.id === targetColumnId);

            if (!sourceColData || !targetColData) return; 

            const cardIndexInSource = sourceColData.cards.findIndex(c => c.id === draggedCardId);
            if (cardIndexInSource === -1) return; 

            const [cardToMove] = sourceColData.cards.splice(cardIndexInSource, 1);
            logActivity(cardToMove.id, `kartı "${sourceColData.name}" kolonundan "${targetColData.name}" kolonuna taşıdı.`);


            const dropTargetCardElement = e.target.closest('.card'); 

            if (dropTargetCardElement && dropTargetCardElement.dataset.columnId === targetColumnId && dropTargetCardElement.dataset.cardId !== draggedCardId) {
                const dropTargetCardId = dropTargetCardElement.dataset.cardId;
                const insertionDataIndex = targetColData.cards.findIndex(c => c.id === dropTargetCardId);

                if (insertionDataIndex > -1) {
                    targetColData.cards.splice(insertionDataIndex, 0, cardToMove);
                } else {
                    targetColData.cards.push(cardToMove);
                }
            } else {
                targetColData.cards.push(cardToMove); 
            }

            saveData(); 
            renderColumns(cardSearchInput.value); 
        }


        function renderLabelColorSelector(container, selectedColorVarName = 'selectedNewLabelColor', onSelectCallback) {
            container.innerHTML = '';
            PREDEFINED_LABEL_COLORS.forEach(color => {
                const colorSpan = document.createElement('span');
                colorSpan.style.backgroundColor = color.value;
                colorSpan.title = color.name;
                if (color.value === window[selectedColorVarName]) { 
                    colorSpan.classList.add('selected');
                }
                colorSpan.addEventListener('click', () => {
                    window[selectedColorVarName] = color.value; 
                    renderLabelColorSelector(container, selectedColorVarName, onSelectCallback); 
                    if (onSelectCallback) onSelectCallback(color.value);
                });
                container.appendChild(colorSpan);
            });
        }

        addNewLabelButton.addEventListener('click', () => {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu panoda etiket ekleme/değiştirme yetkiniz yok.", "error");
            }

            const labelName = newLabelNameInput.value.trim();
            if (!labelName) return showNotification('Etiket adı boş bırakılamaz.', 'error');
            if (availableLabels.find(l => l.name.toLowerCase() === labelName.toLowerCase())) return showNotification('Bu etiket adı zaten mevcut.', 'error');
            
            const newLabel = { id: getNextId(), name: labelName, color: selectedNewLabelColor }; 
            availableLabels.push(newLabel);
            // Log label creation if needed (could be board-level or not logged if focusing on card activities)
            saveData();
            newLabelNameInput.value = '';
            
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const currentCardBoard = boards.find(b=>b.id===currentBoardId); 
            let currentCardLabels = [];
            if(cardId && columnId && currentCardBoard) {
                const column = currentCardBoard.columns.find(c => c.id === columnId);
                if(column) {
                    const card = column.cards.find(k => k.id === cardId);
                    if(card) currentCardLabels = card.labelIds || [];
                }
            }
            renderExistingLabelsInModal(currentCardLabels);
            showNotification(`"${labelName}" etiketi eklendi.`, 'success');
        });
        
        function renderExistingLabelsInModal(selectedLabelIds = []) {
            existingLabelsContainer.innerHTML = '';
            availableLabels.forEach(label => {
                const itemWrapper = document.createElement('div');
                itemWrapper.className = 'existing-label-item';

                const infoDiv = document.createElement('div');
                infoDiv.className = 'label-info';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `label-chk-${label.id}`;
                checkbox.value = label.id;
                checkbox.checked = selectedLabelIds.includes(label.id);
                checkbox.className = 'mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer';
                
                const labelElement = document.createElement('label');
                labelElement.htmlFor = `label-chk-${label.id}`;
                labelElement.className = 'text-sm flex items-center cursor-pointer';
                
                const colorDot = document.createElement('span');
                colorDot.className = 'inline-block w-4 h-4 rounded mr-2';
                colorDot.style.backgroundColor = label.color;
                
                labelElement.appendChild(colorDot);
                labelElement.appendChild(document.createTextNode(label.name));
                
                infoDiv.appendChild(checkbox);
                infoDiv.appendChild(labelElement);
                itemWrapper.appendChild(infoDiv);

                const board = boards.find(b => b.id === currentBoardId);
                if (board && (board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                    const actionsDiv = document.createElement('div');
                    actionsDiv.className = 'label-actions';

                    const editButton = document.createElement('button');
                    editButton.innerHTML = '<i class="fas fa-edit"></i>';
                    editButton.title = "Etiketi Düzenle";
                    editButton.onclick = () => openEditLabelModal(label.id); 
                    actionsDiv.appendChild(editButton);

                    const deleteButton = document.createElement('button');
                    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
                    deleteButton.title = "Etiketi Sil";
                    deleteButton.onclick = () => deleteLabel(label.id); 
                    actionsDiv.appendChild(deleteButton);
                    itemWrapper.appendChild(actionsDiv);
                }
                existingLabelsContainer.appendChild(itemWrapper);
            });
        }
        
        function openEditLabelModal(labelId) {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu panoda etiket düzenleme yetkiniz yok.", "error");
            }
            const label = availableLabels.find(l => l.id === labelId);
            if (!label) return;
            editingLabelIdInput.value = label.id;
            editLabelNameInput.value = label.name;
            selectedEditLabelColor = label.color; 
            renderLabelColorSelector(editLabelColorSelector, 'selectedEditLabelColor', (color) => { selectedEditLabelColor = color; });
            editLabelModal.style.display = 'block';
        }

        closeEditLabelModalButton.addEventListener('click', () => {
            editLabelModal.style.display = 'none';
        });

        saveEditLabelButton.addEventListener('click', () => {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                editLabelModal.style.display = 'none';
                return showNotification("Bu panoda etiket kaydetme yetkiniz yok.", "error");
            }
            const labelIdToEdit = editingLabelIdInput.value;
            const label = availableLabels.find(l => l.id === labelIdToEdit);
            if (!label) return;

            const newName = editLabelNameInput.value.trim();
            if (!newName) return showNotification('Etiket adı boş olamaz.', 'error');

            if (availableLabels.find(l => l.name.toLowerCase() === newName.toLowerCase() && l.id !== labelIdToEdit)) {
                return showNotification('Bu etiket adı zaten başka bir etiket tarafından kullanılıyor.', 'error');
            }
            const oldLabelName = label.name;
            const oldLabelColor = label.color;
            label.name = newName;
            label.color = selectedEditLabelColor; 
            // Log label update if needed
            saveData();

            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const currentCardBoard = boards.find(b => b.id === currentBoardId); 
            let currentCardSelectedLabels = [];
            if (currentCardBoard && cardId && columnId) { 
                const col = currentCardBoard.columns.find(c => c.id === columnId);
                if (col) {
                    const card = col.cards.find(k => k.id === cardId);
                    if (card) currentCardSelectedLabels = card.labelIds || [];
                }
            }
            renderExistingLabelsInModal(currentCardSelectedLabels); 
            renderColumns(cardSearchInput.value); 
            showNotification('Etiket güncellendi.', 'success');
            editLabelModal.style.display = 'none';
        });


        function deleteLabel(labelIdToDelete) {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu panoda etiket silme yetkiniz yok.", "error");
            }
            const label = availableLabels.find(l => l.id === labelIdToDelete);
            if (!label) return;
            
            showConfirmationModal(
                `"${label.name}" Etiketini Sil`,
                "Bu etiketi silmek istediğinizden emin misiniz? Bu etiket tüm kartlardan kaldırılacaktır.",
                () => {
                    // Log label deletion if needed
                    availableLabels = availableLabels.filter(l => l.id !== labelIdToDelete);
                    boards.forEach(b => { 
                        b.columns.forEach(column => {
                            column.cards.forEach(card => {
                                if (card.labelIds && card.labelIds.includes(labelIdToDelete)) {
                                    card.labelIds = card.labelIds.filter(id => id !== labelIdToDelete);
                                }
                            });
                        });
                    });
                    saveData();
                    const cardId = modalCardIdInput.value;
                    const columnId = modalColumnIdInput.value;
                    const currentCardBoard = boards.find(b => b.id === currentBoardId); 
                    let currentCardSelectedLabels = [];
                    if (currentCardBoard && cardId && columnId) { 
                        const col = currentCardBoard.columns.find(c => c.id === columnId);
                        if (col) {
                            const card = col.cards.find(k => k.id === cardId);
                            if (card) currentCardSelectedLabels = card.labelIds || [];
                        }
                    }
                    renderExistingLabelsInModal(currentCardSelectedLabels);
                    renderColumns(cardSearchInput.value);
                    showNotification('Etiket silindi.', 'success');
                }
            );
        }
        
        function renderAssignableUsersInModal(selectedAssigneeNames = []) {
            modalCardAssigneesContainer.innerHTML = '';
            if (users.length === 0) {
                modalCardAssigneesContainer.innerHTML = '<p class="text-xs text-gray-500">Kayıtlı kullanıcı yok.</p>';
                return;
            }
            users.forEach(user => {
                const wrapper = document.createElement('label'); 
                wrapper.className = 'assignee-checkbox-label'; 
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `assignee-chk-${user.username}`;
                checkbox.value = user.username;
                checkbox.checked = selectedAssigneeNames.map(name => name.toLowerCase()).includes(user.username.toLowerCase());
                
                const nameSpan = document.createElement('span');
                nameSpan.className = 'assignee-name-span text-sm'; 
                nameSpan.textContent = user.fullName || user.username; 
                
                wrapper.appendChild(checkbox);
                wrapper.appendChild(nameSpan);
                modalCardAssigneesContainer.appendChild(wrapper);
            });
        }

        function renderCardCommentsInModal(comments = []) {
            modalCardCommentsContainer.innerHTML = '';
            if (!comments || comments.length === 0) {
                modalCardCommentsContainer.innerHTML = '<p class="text-gray-400 dark:text-gray-500 italic text-center py-2">Henüz yorum yok.</p>';
                return;
            }
            
            comments.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.className = 'mb-3 pb-3 border-b border-gray-200 dark:border-gray-600 last:border-b-0 last:pb-0 last:mb-0';
                
                const headerDiv = document.createElement('div');
                headerDiv.className = 'flex justify-between items-center mb-0.5';
                
                const userP = document.createElement('p');
                userP.className = 'font-semibold text-xs';
                const commentingUser = users.find(u => u.username === comment.user);
                userP.textContent = commentingUser ? `${commentingUser.fullName || commentingUser.username} (@${comment.user})` : comment.user; 
                headerDiv.appendChild(userP);

                const timeP = document.createElement('p');
                timeP.className = 'text-xs text-gray-400 dark:text-gray-500';
                timeP.textContent = new Date(comment.timestamp).toLocaleString('tr-TR', {dateStyle:'short', timeStyle:'short'});
                headerDiv.appendChild(timeP);
                
                const textP = document.createElement('p');
                textP.className = 'whitespace-pre-wrap text-sm'; 
                textP.textContent = comment.text;
                
                commentDiv.appendChild(headerDiv);
                commentDiv.appendChild(textP);
                modalCardCommentsContainer.appendChild(commentDiv);
            });
             modalCardCommentsContainer.scrollTop = modalCardCommentsContainer.scrollHeight; 
        }

        addCommentButton.addEventListener('click', () => {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu panoya yorum ekleme yetkiniz yok.", "error");
            }
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card) return;

            const commentText = newCommentTextInput.value.trim();
            if (!commentText) {
                return showNotification('Yorum boş olamaz.', 'error');
            }

            if (!card.comments) card.comments = []; 
            card.comments.push({
                id: getNextId(),
                text: commentText,
                user: currentUser,
                timestamp: new Date().toISOString()
            });
            card.commentsCount = card.comments.length;
            // "yorum yaptı" loglaması kaldırıldı.

            newCommentTextInput.value = ''; 
            saveData();
            renderCardCommentsInModal(card.comments);
            renderColumns(cardSearchInput.value); 
            showNotification('Yorum eklendi.', 'success');
        });
        newCommentTextInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) { 
                e.preventDefault();
                addCommentButton.click();
            }
        });


        function renderSubtasksInModal(subtasks = []) {
            subtaskListContainer.innerHTML = '';
            if (!subtasks || subtasks.length === 0) {
                subtaskListContainer.innerHTML = '<p class="text-gray-400 dark:text-gray-500 italic text-center py-2">Henüz alt görev yok.</p>';
            } else {
                subtasks.forEach(subtask => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'subtask-item';

                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = subtask.completed;
                    checkbox.onchange = () => toggleSubtaskCompletion(subtask.id);
                    itemDiv.appendChild(checkbox);

                    const textSpan = document.createElement('span');
                    textSpan.className = `subtask-text ${subtask.completed ? 'completed' : ''}`;
                    textSpan.textContent = subtask.text;
                    itemDiv.appendChild(textSpan);

                    const deleteBtn = document.createElement('button');
                    deleteBtn.className = 'delete-subtask-btn';
                    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
                    deleteBtn.title = "Alt görevi sil";
                    deleteBtn.onclick = () => deleteSubtask(subtask.id);
                    itemDiv.appendChild(deleteBtn);

                    subtaskListContainer.appendChild(itemDiv);
                });
            }
            updateSubtaskProgressDisplay();
        }

        addSubtaskButton.addEventListener('click', () => {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu panoya alt görev ekleme yetkiniz yok.", "error");
            }
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card) return;

            const subtaskText = newSubtaskTextInput.value.trim();
            if (!subtaskText) return showNotification('Alt görev metni boş olamaz.', 'error');

            if (!card.subtasks) card.subtasks = [];
            card.subtasks.push({ id: getNextId(), text: subtaskText, completed: false });
            logActivity(card.id, `"${subtaskText}" alt görevini ekledi.`);
            
            newSubtaskTextInput.value = '';
            saveData();
            renderSubtasksInModal(card.subtasks);
            renderColumns(cardSearchInput.value); 
        });
        newSubtaskTextInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addSubtaskButton.click();
            }
        });


        function toggleSubtaskCompletion(subtaskId) {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                renderSubtasksInModal(board.columns.find(c => c.id === columnId)?.cards.find(k => k.id === cardId)?.subtasks || []);
                return showNotification("Bu alt görevi değiştirme yetkiniz yok.", "error");
            }
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card || !card.subtasks) return;

            const subtask = card.subtasks.find(st => st.id === subtaskId);
            if (subtask) {
                subtask.completed = !subtask.completed;
                logActivity(card.id, `"${subtask.text}" alt görevini ${subtask.completed ? 'tamamladı' : 'tamamlanmadı olarak işaretledi'}.`);
                saveData();
                renderSubtasksInModal(card.subtasks);
                renderColumns(cardSearchInput.value);
            }
        }
        
        function deleteSubtask(subtaskId) {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu alt görevi silme yetkiniz yok.", "error");
            }
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card || !card.subtasks) return;

            const subtaskIndex = card.subtasks.findIndex(st => st.id === subtaskId);
            if (subtaskIndex > -1) {
                const subtaskText = card.subtasks[subtaskIndex].text;
                card.subtasks.splice(subtaskIndex, 1);
                logActivity(card.id, `"${subtaskText}" alt görevini sildi.`);
                saveData();
                renderSubtasksInModal(card.subtasks);
                renderColumns(cardSearchInput.value);
            }
        }


        function updateSubtaskProgressDisplay() {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);

            if (card && card.subtasks) {
                const completed = card.subtasks.filter(st => st.completed).length;
                const total = card.subtasks.length;
                if(subtaskProgressDisplay) subtaskProgressDisplay.textContent = `${completed}/${total}`;
            } else {
                if(subtaskProgressDisplay) subtaskProgressDisplay.textContent = "0/0";
            }
        }


        function saveCardDetailsOnModalClose() {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            if (!cardId || !columnId || !currentBoardId) return; 

            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            
            if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                 renderColumns(cardSearchInput.value); 
                return; 
            }

            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            
            if (card) {
                let activityParts = [];
                
                const newTitle = modalCardTitleInput.value.trim() || "Başlıksız Kart";
                if (card.title !== newTitle) { activityParts.push(`başlığı "${card.title}" olanı "${newTitle}" olarak değiştirdi`); card.title = newTitle; }
                
                const newDescription = modalCardDescriptionInput.value.trim();
                if (card.description !== newDescription) { activityParts.push(`açıklamayı güncelledi`); card.description = newDescription; }

                const newImageUrl = modalCardImageUrlInput.value.trim();
                if (card.imageUrl !== newImageUrl) { activityParts.push(`kapak resmini güncelledi`); card.imageUrl = newImageUrl; }

                const newPriority = modalCardPrioritySelect.value;
                if (card.priority !== newPriority) { activityParts.push(`önceliği ${PRIORITY_LEVELS[card.priority] || 'Yok'} olanı ${PRIORITY_LEVELS[newPriority]} olarak değiştirdi`); card.priority = newPriority; }
                
                const selectedAssignees = [];
                modalCardAssigneesContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(chk => {
                    selectedAssignees.push(chk.value);
                });
                if (JSON.stringify(card.assignees.sort()) !== JSON.stringify(selectedAssignees.sort())) { activityParts.push(`atanan kişileri güncelledi`); card.assignees = selectedAssignees; }


                const newDueDate = modalCardDueDateInput.value;
                if (card.dueDate !== newDueDate) { activityParts.push(`bitiş tarihini güncelledi`); card.dueDate = newDueDate; }
                
                const selectedLabelIds = [];
                existingLabelsContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
                    selectedLabelIds.push(checkbox.value);
                });
                if (JSON.stringify(card.labelIds.sort()) !== JSON.stringify(selectedLabelIds.sort())) { activityParts.push(`etiketleri güncelledi`); card.labelIds = selectedLabelIds; }
                
                if (activityParts.length > 0) {
                    logActivity(card.id, activityParts.join(', ') + '.');
                }
                saveData();
                renderColumns(cardSearchInput.value); 
            }
        }


        function openCardModal(cardId, columnId) {
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card) return;

            modalCardTitleInput.value = card.title;
            modalCardIdInput.value = card.id;
            modalColumnIdInput.value = columnId;
            modalCardDescriptionInput.value = card.description || '';
            modalCardImageUrlInput.value = card.imageUrl || '';
            modalCardPrioritySelect.value = card.priority || 'normal'; 
            renderAssignableUsersInModal(card.assignees || []); 
            modalCardDueDateInput.value = card.dueDate || '';
            renderSubtasksInModal(card.subtasks || []); 
            renderCardActivityLog(card); // NEW: Render card activity log
            
            renderExistingLabelsInModal(card.labelIds || []);
            renderLabelColorSelector(newLabelColorSelector, 'selectedNewLabelColor', (color) => { selectedNewLabelColor = color; });
            renderCardCommentsInModal(card.comments || []); 
            
            const canEditBoard = board.owner === currentUser || (board.members && board.members.includes(currentUser));
            
            if (card.isArchived) {
                archiveCardButton.textContent = 'Arşivden Çıkar';
                archiveCardButton.classList.remove('btn-secondary', 'dark:bg-gray-600', 'dark:hover:bg-gray-500');
                archiveCardButton.classList.add('btn-success'); 
            } else {
                archiveCardButton.textContent = 'Kartı Arşivle';
                archiveCardButton.classList.remove('btn-success');
                archiveCardButton.classList.add('btn-secondary');
            }
            archiveCardButton.style.display = canEditBoard ? 'inline-block' : 'none';


            deleteCardButton.style.display = canEditBoard ? 'inline-block' : 'none';
            addNewLabelButton.style.display = canEditBoard ? 'inline-block' : 'none';
            addCommentButton.style.display = canEditBoard ? 'inline-block' : 'none';
            addSubtaskButton.style.display = canEditBoard ? 'inline-block' : 'none';
            
            modalCardTitleInput.disabled = !canEditBoard;
            modalCardDescriptionInput.disabled = !canEditBoard;
            modalCardImageUrlInput.disabled = !canEditBoard;
            modalCardDueDateInput.disabled = !canEditBoard;
            modalCardPrioritySelect.disabled = !canEditBoard; 

            cardModal.style.display = 'block';
            if(canEditBoard) modalCardTitleInput.focus();
        }

        archiveCardButton.addEventListener('click', () => {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board || !(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu kartı arşivleme/arşivden çıkarma yetkiniz yok.", "error");
            }
            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card) return;

            card.isArchived = !card.isArchived; 
            logActivity(card.id, `kartı ${card.isArchived ? 'arşivledi' : 'arşivden çıkardı'}.`);
            saveData();
            renderColumns(cardSearchInput.value); 
            cardModal.style.display = 'none'; 
            showNotification(card.isArchived ? 'Kart arşivlendi.' : 'Kart arşivden çıkarıldı.', 'success');
        });


        closeCardModalButton.addEventListener('click', () => {
            saveCardDetailsOnModalClose(); 
            cardModal.style.display = 'none';
        });
        
        window.addEventListener('click', (event) => {
            if (event.target == cardModal) {
                saveCardDetailsOnModalClose(); 
                cardModal.style.display = 'none';
            }
             if (event.target == profileModal) { 
                profileModal.style.display = 'none';
            }
            if (event.target == renameBoardModal) { 
                renameBoardModal.style.display = 'none';
            }
            if (event.target == renameColumnModal) { // NEW
                renameColumnModal.style.display = 'none';
            }
            if (event.target == confirmationModal) { 
                confirmationModal.style.display = 'none';
                currentConfirmAction = null;
            }
            if (event.target == boardMembersModal) { 
                boardMembersModal.style.display = 'none';
            }
            if (event.target == editLabelModal) { 
                editLabelModal.style.display = 'none';
            }
            if (!event.target.closest('.actions-menu, .board-actions-button, .column-actions-button')) {
                document.querySelectorAll('.actions-menu').forEach(menu => menu.style.display = 'none');
            }
        });
        window.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                if (cardModal.style.display === 'block') {
                    saveCardDetailsOnModalClose(); 
                    cardModal.style.display = 'none';
                }
                if (profileModal.style.display === 'block') {
                     profileModal.style.display = 'none';
                }
                if (renameBoardModal.style.display === 'block') { 
                    renameBoardModal.style.display = 'none';
                }
                if (renameColumnModal.style.display === 'block') { // NEW
                    renameColumnModal.style.display = 'none';
                }
                if (confirmationModal.style.display === 'flex') {
                    confirmationModal.style.display = 'none';
                    currentConfirmAction = null;
                }
                 if (boardMembersModal.style.display === 'block') { 
                    boardMembersModal.style.display = 'none';
                }
                if (editLabelModal.style.display === 'block') { 
                    editLabelModal.style.display = 'none';
                }
            }
        });
        
        deleteCardButton.addEventListener('click', () => {
            const cardId = modalCardIdInput.value;
            const columnId = modalColumnIdInput.value;
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;

            if (!(board.owner === currentUser || (board.members && board.members.includes(currentUser)))) {
                return showNotification("Bu kartı silme yetkiniz yok.", "error");
            }

            const column = board.columns.find(c => c.id === columnId);
            if (!column) return;
            const card = column.cards.find(k => k.id === cardId);
            if (!card) return;

            showConfirmationModal(
                `"${card.title}" Kartını Sil`,
                "Bu kartı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz ve kart arşivlenmek yerine kalıcı olarak silinir.", 
                () => {
                    const cardIndex = column.cards.findIndex(k => k.id === cardId);
                    if (cardIndex > -1) {
                        // Log permanent deletion if needed, or rely on archive log
                        column.cards.splice(cardIndex, 1);
                        saveData();
                        cardModal.style.display = 'none';
                        renderColumns(cardSearchInput.value);
                        showNotification('Kart silindi.', 'success');
                    }
                }
            );
        });

        // --- Pano Üyeleri Yönetimi ---
        function openBoardMembersModal(boardId) {
            const board = boards.find(b => b.id === boardId);
            if (!board || board.owner !== currentUser) { 
                 return showNotification("Pano üyelerini sadece pano sahibi yönetebilir.", "error");
            }
            manageMembersBoardIdInput.value = boardId;
            boardMembersListContainer.innerHTML = '';

            users.forEach(user => {
                if (user.username === board.owner) return; 

                const itemDiv = document.createElement('div');
                itemDiv.className = 'user-list-item';

                const nameSpan = document.createElement('span');
                nameSpan.textContent = `${user.fullName || user.username} (@${user.username})`;
                itemDiv.appendChild(nameSpan);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = user.username;
                checkbox.checked = board.members.includes(user.username);
                checkbox.className = 'h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500';
                itemDiv.appendChild(checkbox);
                boardMembersListContainer.appendChild(itemDiv);
            });
            boardMembersModal.style.display = 'block';
        }

        closeBoardMembersModalButton.addEventListener('click', () => {
            boardMembersModal.style.display = 'none';
        });

        saveBoardMembersButton.addEventListener('click', () => {
            const boardId = manageMembersBoardIdInput.value;
            const board = boards.find(b => b.id === boardId);
            if (!board || board.owner !== currentUser) {
                boardMembersModal.style.display = 'none';
                return showNotification("Pano üyelerini kaydetme yetkiniz yok.", "error");
            }

            const oldMembers = [...board.members];
            const selectedMembers = [board.owner]; 
            boardMembersListContainer.querySelectorAll('input[type="checkbox"]:checked').forEach(chk => {
                if (!selectedMembers.includes(chk.value)) {
                    selectedMembers.push(chk.value);
                }
            });
            board.members = selectedMembers;
            
            // Log member changes if needed
            saveData();
            renderSidebarBoards(); 
            showNotification('Pano üyeleri güncellendi.', 'success');
            boardMembersModal.style.display = 'none';
        });

        // --- Pano Arka Planı Değiştirme ---
        const PREDEFINED_BOARD_BACKGROUNDS = [
            { name: 'Varsayılan', value: '' }, 
            { name: 'Açık Mavi', value: '#A8DADC' },
            { name: 'Açık Yeşil', value: '#A8E6CF' },
            { name: 'Açık Sarı', value: '#FFD3B6' },
            { name: 'Açık Pembe', value: '#FFAAA5' },
            { name: 'Lavanta', value: '#E0BBE4' },
        ];

        function openChangeBackgroundModal(boardId) {
            const board = boards.find(b => b.id === boardId);
            if (!board || board.owner !== currentUser) { 
                return showNotification("Pano arka planını sadece pano sahibi değiştirebilir.", "error");
            }

            let colorOptionsHTML = PREDEFINED_BOARD_BACKGROUNDS.map((bg, index) => 
                `${index + 1}. ${bg.name}`
            ).join('\n');
            
            const choice = prompt(`Pano arka plan rengi seçin:\n${colorOptionsHTML}\nNumara girin (örn: 1) veya özel bir renk kodu (#RRGGBB):`, 
                                PREDEFINED_BOARD_BACKGROUNDS.findIndex(bg => bg.value === board.backgroundColor) + 1 || '');

            if (choice !== null) {
                let newBgColor = '';
                if (choice.startsWith('#') && choice.length === 7) { 
                    newBgColor = choice;
                } else {
                    const choiceIndex = parseInt(choice) - 1;
                    if (choiceIndex >= 0 && choiceIndex < PREDEFINED_BOARD_BACKGROUNDS.length) {
                        newBgColor = PREDEFINED_BOARD_BACKGROUNDS[choiceIndex].value;
                    } else {
                        showNotification('Geçersiz seçim.', 'error');
                        return;
                    }
                }
                board.backgroundColor = newBgColor;
                // Log background change if needed
                saveData();
                if (board.id === currentBoardId) {
                    applyBoardBackground(newBgColor);
                }
                showNotification('Pano arka planı değiştirildi.', 'success');
            }
        }

        function applyBoardBackground(color) {
            if (color) {
                mainAppContent.style.backgroundColor = color;
            } else { 
                mainAppContent.style.backgroundColor = ''; 
            }
        }

        // --- Kart Arama ---
        cardSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            renderColumns(searchTerm);
        });

        // --- Archived Cards View ---
        toggleArchivedViewButton.addEventListener('click', () => {
            showingArchived = !showingArchived;
            if (showingArchived) {
                columnsContainer.classList.add('hidden');
                archivedCardsContainer.classList.remove('hidden');
                toggleArchivedViewButton.innerHTML = '<i class="fas fa-th-list mr-1"></i> Panoya Dön';
                toggleArchivedViewButton.classList.add('active');
                renderArchivedCards();
            } else {
                columnsContainer.classList.remove('hidden');
                archivedCardsContainer.classList.add('hidden');
                toggleArchivedViewButton.innerHTML = '<i class="fas fa-archive mr-1"></i> Arşiv';
                toggleArchivedViewButton.classList.remove('active');
                renderColumns(cardSearchInput.value);
            }
        });

        function renderArchivedCards() {
            archivedCardsContainer.innerHTML = '';
            const board = boards.find(b => b.id === currentBoardId);
            if (!board) return;

            let hasArchivedCards = false;
            board.columns.forEach(column => {
                column.cards.filter(card => card.isArchived).forEach(card => {
                    hasArchivedCards = true;
                    const cardItem = document.createElement('div');
                    cardItem.className = 'archived-card-list-item';
                    
                    const titleSpan = document.createElement('span');
                    titleSpan.className = 'archived-card-title';
                    titleSpan.textContent = card.title;
                    cardItem.appendChild(titleSpan);

                    const actionsDiv = document.createElement('div');
                    actionsDiv.className = 'archived-card-actions';

                    const unarchiveButton = document.createElement('button');
                    unarchiveButton.className = 'btn-success text-xs';
                    unarchiveButton.innerHTML = '<i class="fas fa-box-open mr-1"></i> Arşivden Çıkar';
                    unarchiveButton.onclick = () => {
                        card.isArchived = false;
                        logActivity(card.id, `kartı arşivden çıkardı.`);
                        saveData();
                        renderArchivedCards(); 
                        if (!showingArchived) renderColumns(cardSearchInput.value); 
                    };
                    
                    const deletePermButton = document.createElement('button');
                    deletePermButton.className = 'btn-danger text-xs';
                    deletePermButton.innerHTML = '<i class="fas fa-trash-alt mr-1"></i> Kalıcı Sil';
                    deletePermButton.onclick = () => {
                         showConfirmationModal(
                            `"${card.title}" Kartını Kalıcı Sil`,
                            "Bu kartı kalıcı olarak silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
                            () => {
                                const cardIndex = column.cards.findIndex(c => c.id === card.id);
                                if (cardIndex > -1) {
                                    // Log permanent deletion from archive if needed
                                    column.cards.splice(cardIndex, 1);
                                    saveData();
                                    renderArchivedCards();
                                }
                            }
                        );
                    };

                    actionsDiv.appendChild(unarchiveButton);
                    actionsDiv.appendChild(deletePermButton);
                    cardItem.appendChild(actionsDiv);
                    archivedCardsContainer.appendChild(cardItem);
                });
            });

            if (!hasArchivedCards) {
                archivedCardsContainer.innerHTML = '<p class="text-center text-gray-500 dark:text-gray-400 py-4">Arşivlenmiş kart bulunmuyor.</p>';
            }
        }

        // --- Card-Specific Activity Log ---
        function logActivity(cardId, action) { // boardId removed, cardId is now primary
            const board = boards.find(b => b.id === currentBoardId); // Still need board context for finding the card
            if (!board) return;

            let cardToLog = null;
            for (const column of board.columns) {
                cardToLog = column.cards.find(c => c.id === cardId);
                if (cardToLog) break;
            }

            if (!cardToLog) return; // Only log if card is found

            if (!cardToLog.activityLog) {
                cardToLog.activityLog = [];
            }
            cardToLog.activityLog.unshift({ 
                id: getNextId(),
                user: currentUser,
                action: action,
                timestamp: new Date().toISOString()
            });
            if (cardToLog.activityLog.length > 50) { // Limit card log size
                cardToLog.activityLog.pop();
            }
            saveData();
        }

        function renderCardActivityLog(card) {
            modalCardActivityLogContainer.innerHTML = '';
            if (!card.activityLog || card.activityLog.length === 0) {
                modalCardActivityLogContainer.innerHTML = '<p class="text-gray-400 dark:text-gray-500 italic text-center py-2">Bu kart için aktivite yok.</p>';
                return;
            }

            card.activityLog.forEach(log => {
                const logItem = document.createElement('div');
                logItem.className = 'activity-log-item';

                const userP = document.createElement('p');
                userP.className = 'activity-log-user';
                const userFullName = users.find(u => u.username === log.user)?.fullName || log.user;
                userP.textContent = userFullName;

                const actionP = document.createElement('p');
                actionP.className = 'activity-log-action';
                actionP.textContent = log.action;
                
                const timeP = document.createElement('p');
                timeP.className = 'activity-log-timestamp';
                timeP.textContent = new Date(log.timestamp).toLocaleString('tr-TR', { dateStyle: 'medium', timeStyle: 'short' });

                logItem.appendChild(userP);
                logItem.appendChild(actionP);
                logItem.appendChild(timeP);
                modalCardActivityLogContainer.appendChild(logItem);
            });
        }


        // --- Uygulama Başlangıcı ---
        function initializeApp() {
            applyTheme(currentTheme); 
            const lastSelectedBoardId = localStorage.getItem(LS_LAST_SELECTED_BOARD_ID);

            if (currentUser) {
                authScreen.classList.add('hidden');
                appScreen.style.display = 'flex';
                updateProfileDisplay(); 
                renderSidebarBoards(); 
                
                if (lastSelectedBoardId) { 
                    const boardExists = boards.some(b => b.id === lastSelectedBoardId);
                    if (boardExists) {
                        selectBoard(lastSelectedBoardId);
                    } else { 
                        currentBoardId = null; 
                        localStorage.removeItem(LS_LAST_SELECTED_BOARD_ID);
                        currentBoardNameHeader.textContent = "Pano Seçin";
                        selectedBoardArea.classList.add('hidden');
                        cardSearchInput.classList.add('hidden');
                        toggleArchivedViewButton.classList.add('hidden');
                        applyBoardBackground('');
                    }
                } else { 
                     currentBoardNameHeader.textContent = "Pano Seçin";
                     selectedBoardArea.classList.add('hidden');
                     cardSearchInput.classList.add('hidden');
                     toggleArchivedViewButton.classList.add('hidden');
                     applyBoardBackground('');
                }
            } else {
                authScreen.classList.remove('hidden');
                appScreen.style.display = 'none';
            }
            renderLabelColorSelector(newLabelColorSelector, 'selectedNewLabelColor', (color) => { selectedNewLabelColor = color; });
            renderLabelColorSelector(editLabelColorSelector, 'selectedEditLabelColor', (color) => { selectedEditLabelColor = color; });
        }


        document.addEventListener('DOMContentLoaded', initializeApp);
